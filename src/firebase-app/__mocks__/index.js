export const db = {
  collection: (collectionName) => ({
    add: (collection) => {
      return new Promise((resolve, reject) => {
        process.nextTick(() => {
          collection.match(/error/) ?
            reject(new Error({
              error: 'rejected',
            })) :
            resolve({
              message: 'resolved',
            })
        })
      })
    },
  }),
}

// function promiseForAddingCollection(collection, resolve, reject) {
//   process.nextTick(() =>(
//
//   )
// console.log(collection.match(/error/))
// if (collection.match(/error/)) {
//   console.log('rejecting...', reject)
//   reject('resolved to false')
// } else resolve('resolved true')
//   )
// }
