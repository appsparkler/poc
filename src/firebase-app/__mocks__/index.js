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
    get: ()=> {
      return new Promise(function(resolve, reject) {
        process.nextTick(()=> {
          resolve([])
        })
      })
    },
  }),
}
