module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:1313/',
        'http://localhost:1313/aug/',
        'http://localhost:1313/guest/',
        'http://localhost:1313/about/'
        ],
      startServerCommand: 'cd exampleSite && HUGO_ENV=production && hugo mod get -u && hugo server --configDir ../test/grid --baseURL="http://localhost:1313"',
      startServerReadyPattern: 'Web Server is available'
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};