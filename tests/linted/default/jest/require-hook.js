'use strict'

const database = {}

function alphaFunc (city) {
  return database.cities.includes(city)
}

const beta = {}

jest.mock('../api')

const initializeCityDatabase = () => {
  database.addCity('Vienna')
  database.addCity('San Juan')
  database.addCity('Wellington')
}

const clearCityDatabase = () => {
  database.clear()
}

initializeCityDatabase()

describe('wrapping to avoid other errors', () => {
  test('that persists cities', () => {
    expect(database.cities.length)
      .toHaveLength(3)
  })

  test('city database has Vienna', () => {
    expect(alphaFunc('Vienna'))
      .toBeTruthy()
  })

  test('city database has San Juan', () => {
    expect(alphaFunc('San Juan'))
      .toBeTruthy()
  })
})

describe('when loading cities from the api', () => {
  // eslint-disable-next-line no-restricted-syntax, prefer-const
  let consoleWarnSpy = jest.spyOn(console, 'warn')

  beta.mockResolvedValue(['Wellington', 'London'])

  test('does not duplicate cities', async () => {
    await database.loadCities()

    expect(database.cities)
      .toHaveLength(4)
  })

  test('logs any duplicates', async () => {
    await database.loadCities()

    expect(consoleWarnSpy)
      .toHaveBeenCalledWith('Ignored duplicate cities: Wellington')
  })
})

clearCityDatabase()
