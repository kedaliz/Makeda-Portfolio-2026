import { test } from 'node:test';
import assert from 'node:assert/strict';
import { featuredProjects, findProjectByRoute, mergeProjects, projectRoute } from './projects.js';

test('all featured projects are available without API data and have unique routes', () => {
  const projects = mergeProjects([]);
  assert.equal(projects.length, 8);
  assert.equal(new Set(projects.map(projectRoute)).size, 8);
  for (const project of projects) {
    assert.equal(findProjectByRoute(projects, projectRoute(project)), project);
  }
});

test('matching API projects enrich the featured project without replacing its details', () => {
  const projects = mergeProjects([{
    _id: 'database-id',
    title: 'Different title',
    githubUrl: 'https://github.com/kedaliz/community-events',
    figmaUrl: 'https://example.com/design',
    description: 'API description',
  }]);
  const community = projects.find((project) => project._id === 'community-events');
  assert.equal(projects.length, 8);
  assert.equal(community.figmaUrl, 'https://example.com/design');
  assert.equal(community.description, featuredProjects[2].description);
});

test('additional API projects have stable, distinct, shareable routes', () => {
  const projects = mergeProjects([{ _id: 'a/b', title: 'Additional project' }]);
  const extra = projects.at(-1);
  assert.equal(projects.length, 9);
  assert.equal(projectRoute(extra), '#/work/api-a%2Fb');
  assert.equal(findProjectByRoute(projects, '#/work/api-a%2Fb'), extra);
  assert.equal(findProjectByRoute(projects, '#/work/missing'), undefined);
});

test('invalid API responses are rejected instead of hiding featured projects', () => {
  assert.throws(() => mergeProjects({}), TypeError);
});
