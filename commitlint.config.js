module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']],
      'scope-enum': [2, 'always', ['project', 'client', 'server']],
    },
    parserPreset: {
      parserOpts: {
        issuePrefixes: ['PROJECT-123', 'CLIENT-456', 'SERVER-789'],
      },
    },
  };
  