jest.useFakeTimers()

test('wait 1 second before ending the game', () => {
  const timerGame = require('../timerGame')
  timerGame()

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
})
