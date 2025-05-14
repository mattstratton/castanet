module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:8008/castanet/',
        'http://localhost:8008/castanet/aug/',
        'http://localhost:8008/castanet/guest/',
        'http://localhost:8008/castanet/about/'
        ],
      startServerCommand: "npm run example -- --disableLiveReload --minify",
      startServerReadyPattern: 'Web Server is available'
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};