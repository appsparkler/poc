module.exports = {
  db: {
    collection: (collectionName) => ({
      add: (collection) => new Promise(
          (resolve)=> resolve(true),
          (reject) => reject(false)
      ),
    }),
  },
}
