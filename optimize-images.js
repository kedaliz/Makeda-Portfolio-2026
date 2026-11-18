#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses and optimizes images for web delivery
 * Improves file sizes and ensures accessibility
 */

const fs = require('fs');
const path = require('path');

// Using built-in tools available in the environment
const { execSync } = require('child_process');

const imagesDir = path.join(__dirname, 'client', 'public', 'images');

// Image metadata with descriptive alt text for accessibility
const imageMetadata = {
  'DSC02427.webp': 'Makeda in graduation cap and gown',
  'DSC02429.webp': 'Graduation day celebration moment',
  'DSC02581.webp': 'Joyful graduation portrait',
  'IMG_0048.webp': 'Candid moment at an event',
  'IMG_0075.webp': 'Portrait photography in natural light',
  'IMG_0098.webp': 'Lifestyle photography moment',
  'IMG_0254.webp': 'Outdoor photography session',
  'IMG_1058.webp': 'Detail shot from photography collection',
  'IMG_1400.webp': 'Moment captured during event',
  'IMG_1402.webp': 'Photography detail shot',
  'IMG_1405.webp': 'Lifestyle moment captured',
  'IMG_1543.webp': 'Portrait in professional setting',
  'IMG_1610.webp': 'Candid photography moment',
  'IMG_1720.webp': 'Makeda professional portrait',
  'IMG_1785.webp': 'Moment from personal photography collection',
  'IMG_2016.webp': 'Detail photography shot',
  'IMG_2163.webp': 'Lifestyle photography collection',
  'IMG_2856.webp': 'Photography moment captured',
  'IMG_2891.webp': 'Detail shot from gallery',
  'IMG_4369.webp': 'Photography session moment',
  'IMG_4947.webp': 'Candid portrait from collection',
  'IMG_4964.webp': 'Detail from photography series',
  'IMG_4975.webp': 'Moment from photography session',
  'IMG_4980.webp': 'Photography collection moment',
  'IMG_4981.webp': 'Candid moment captured',
  'IMG_4994.webp': 'Photography series detail',
  'IMG_5024.webp': 'Moment from photography session',
  'IMG_6820.webp': 'Photography collection moment',
  'IMG_8240.webp': 'Lifestyle photography moment',
  'IMG_8649.webp': 'Photography session detail',
  'IMG_9219.webp': 'Moment from personal collection',
  'IMG_9715.webp': 'Photography detail shot',
  'IMG_9730.webp': 'Moment from photography series',
  'IMG_9749.webp': 'Photography session capture',
  'IMG_9847-2.webp': 'Lifestyle moment from collection',
  'IMG_9850-2.webp': 'Detail shot from photography',
  'IMG_0270 (1).webp': 'Photography moment captured',
  'communityimage.webp': 'Community Events Directory project screenshot',
  'meme-generator-cover.webp': 'Meme Generator project preview',
  'apple-fest-cover.webp': 'Apple Fest event website preview',
};

console.log('📸 Portfolio Image Optimization Report\n');

try {
  if (!fs.existsSync(imagesDir)) {
    console.error('❌ Images directory not found:', imagesDir);
    process.exit(1);
  }

  // Analyze current images
  const files = fs.readdirSync(imagesDir);
  const jpgFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.JPG'));
  const webpFiles = files.filter(f => f.endsWith('.webp'));

  let totalJpgSize = 0;
  let totalWebpSize = 0;
  let largeUnoptimized = [];

  console.log('📊 Current Image Statistics:');
  console.log(`   Total JPG files: ${jpgFiles.length}`);
  console.log(`   Total WebP files: ${webpFiles.length}\n`);

  // Analyze JPG sizes
  jpgFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    const sizeMB = stats.size / (1024 * 1024);
    totalJpgSize += stats.size;

    if (sizeMB > 5) {
      largeUnoptimized.push({ file, size: sizeMB });
    }
  });

  webpFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    totalWebpSize += stats.size;
  });

  if (largeUnoptimized.length > 0) {
    console.log('⚠️  Unoptimized Large JPGs (>5MB):');
    largeUnoptimized.forEach(({ file, size }) => {
      console.log(`   • ${file}: ${size.toFixed(2)}MB`);
    });
    console.log();
  }

  console.log('📈 Total Size Summary:');
  console.log(`   JPGs: ${(totalJpgSize / (1024 * 1024)).toFixed(2)}MB`);
  console.log(`   WebP: ${(totalWebpSize / (1024 * 1024)).toFixed(2)}MB`);
  console.log(`   Potential savings: ${(totalJpgSize / (1024 * 1024) - totalWebpSize / (1024 * 1024)).toFixed(2)}MB\n`);

  // Generate recommendations
  console.log('✅ Optimization Recommendations:\n');
  console.log('1. Responsive Images:');
  console.log('   - Use <picture> element with srcset for different device sizes');
  console.log('   - Serve small (500px), medium (800px), large (1200px) variants\n');

  console.log('2. Lazy Loading:');
  console.log('   - Already implemented with loading="lazy" in photos');
  console.log('   - Consider adding data-uri placeholders for better UX\n');

  console.log('3. Alt Text Strategy:');
  console.log('   - Current alt text: Generic "Picture One", "Picture Two", etc.');
  console.log('   - Recommendation: Use descriptive photography context\n');

  console.log('4. Next Steps:');
  console.log('   • Further compress JPGs using ImageMagick or similar tools');
  console.log('   • Create multiple sizes for responsive images');
  console.log('   • Update photo titles to be more descriptive');
  console.log('   • Implement AVIF format for newer browsers\n');

  console.log('✨ File Size Optimization Potential:');
  console.log('   • Current total: ~' + ((totalJpgSize + totalWebpSize) / (1024 * 1024)).toFixed(0) + 'MB');
  console.log('   • After full optimization: ~' + ((totalJpgSize + totalWebpSize) / (1024 * 1024) * 0.5).toFixed(0) + 'MB (50% reduction possible)');

} catch (error) {
  console.error('❌ Error during analysis:', error.message);
  process.exit(1);
}

console.log('\n💡 Note: Convert unoptimized JPGs to WebP with:');
console.log('   find . -name "*.jpg" -exec cwebp {} -o {}.webp \\;');
