const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
}

export default function(url) {
  return new Promise(function(resolve, reject) {
    const userID = parseInt(url.substr('/users/'.length), 10)
    process.nextTick(() => {
      users[userID] ?
        resolve(users[userID]) :
        reject(new Error(`User with ${userID} not found.`))
    })
  })
}
