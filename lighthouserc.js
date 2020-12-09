module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313/'],
      startServerCommand: 'cd exampleSite && HUGO_ENV=production && hugo server --baseUrl="http://localhost:1313"',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};