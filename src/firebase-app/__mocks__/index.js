module.exports = {
  db: {
    collection: (collectionName) => ({
      add: (collection) => {
        return new Promise(
            promiseForAddingCollection.bind(null, collection)
        )
      },
    }),
  },
}

function promiseForAddingCollection(collection, resolve, reject) {
  console.log(collection)
  if (collection.match(/error/)) reject(false)
  else resolve(true)
}
