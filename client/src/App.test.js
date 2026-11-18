import { test } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

test('work and direct case-study routes render without an API response', async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  globalThis.window = { location: { hash: '' } };
  globalThis.document = { addEventListener() {} };
  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    const work = renderToStaticMarkup(React.createElement(App));
    assert.equal((work.match(/class="work-card"/g) || []).length, 8);
    assert.match(work, /BI Learning Analytics Dashboard/);
    assert.match(work, /INFO 4340 Project/);
    assert.match(work, /href="#\/work\/meme-generator"/);
    assert.ok(work.indexOf('Gymling Gym') < work.indexOf('Meme Generator'));
    assert.ok(work.indexOf('Collegetown Off-Campus Housing') < work.indexOf('Meme Generator'));
    assert.ok(work.indexOf('BI Learning Analytics Dashboard') < work.indexOf('Meme Generator'));

    globalThis.window.location.hash = '#/work/community-events';
    const detail = renderToStaticMarkup(React.createElement(App));
    assert.match(detail, /<h1>Community Events Directory<\/h1>/);
    assert.match(detail, /<summary>Problem<\/summary>/);
    assert.match(detail, /<summary>My Role<\/summary>/);
    assert.match(detail, /<summary>Result<\/summary>/);
    assert.match(detail, /href="#\/"/);

    globalThis.window.location.hash = '#/work/gymling-gym';
    const gymling = renderToStaticMarkup(React.createElement(App));
    assert.match(gymling, /Research &amp; synthesis/);
    assert.match(gymling, /affinity diagram/i);
    assert.match(gymling, /https:\/\/www\.figma\.com\/board\/XcQQ78uFVYsny6oOcoJu3T/);
    assert.match(gymling, /https:\/\/www\.figma\.com\/proto\/9OKq6DH2Zxlj85XFYgzZlC/);

    globalThis.window.location.hash = '#/work/housing-transparency';
    const housing = renderToStaticMarkup(React.createElement(App));
    assert.match(housing, /Scope &amp; requirements/);
    assert.match(housing, /goals, not reported results/);
    assert.match(housing, /https:\/\/www\.figma\.com\/design\/UWUZiCPq12OEhWXGSmUkQL/);
  } finally {
    await server.close();
    delete globalThis.window;
    delete globalThis.document;
  }
});
