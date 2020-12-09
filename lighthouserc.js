module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:1313/',
        'http://localhost:1313/aug/',
        'http://localhost:1313/guest/',
        'http://localhost:1313/about/'
        ],
      startServerCommand: 'cd exampleSite && HUGO_ENV=production && hugo server --baseUrl="http://localhost:1313"',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};