module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:1313/'
        ],
      startServerCommand: 'cd exampleSite && HUGO_ENV=production && hugo server --config ../test/blue-row-jumbo-true-config.toml --baseUrl="http://localhost:1313"',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};