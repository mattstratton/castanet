module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:1313/'
        ],
      startServerCommand: 'cd exampleSite && HUGO_ENV=production && hugo mod get -u && hugo server --configDir ../test/row-jumbo-false --baseURL="http://localhost:1313"',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};