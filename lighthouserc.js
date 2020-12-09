module.exports = {
  ci: {
    collect: {
      staticDistDir: './exampleSite/public',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};