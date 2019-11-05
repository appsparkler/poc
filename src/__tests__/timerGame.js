jest.useFakeTimers()

test('wait 1 second before ending the game', () => {
  const timerGame = require('../timerGame')
  timerGame()

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
})

/*
  Another test we might want to write for this module is one that asserts
  that the callback is called after 1 second. To do this, we're going to
  use Jest's timer * control APIs to fast-forward time right in the middle
  of the test:
*/
test('calls the callback after 1 second', () => {
  const timerGame = require('../timerGame')
  const callback = jest.fn()
  timerGame(callback)

  expect(callback).not.toBeCalled()

  // Fast-forward until all timers have been executed
  jest.runAllTimers()

  expect(callback).toBeCalled()
  expect(callback).toHaveBeenCalledTimes(1)
})
