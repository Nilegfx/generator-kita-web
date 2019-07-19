'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-kita-web:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ projectName: 'nile' });
  });

  it('creates files', () => {
    assert.file([
      'nile/package.json',
      'nile/src/main.js',
      'nile/rollup.config.js',
      'nile/index.html',
      'nile/favicon.ico'
    ]);
  });

  it('adds dependencies', () => {
    assert.jsonFileContent('nile/package.json', {
      devDependencies: {
        rimraf: '^2.6.3',
        rollup: '^1.17.0',
        'rollup-plugin-livereload': '^1.0.1',
        'rollup-plugin-serve': '^1.0.1'
      }
    });
  });
});
