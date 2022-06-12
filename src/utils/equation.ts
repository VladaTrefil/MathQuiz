type Operation = {
  name: string,
  symbol: string
}

type operationKey = 'add' | 'subtract'

export type Equation = {
  operation: Operation,
  varA: number,
  varB: number,
  result: number,
  text: string
}

const OPERATIONS = {
  add: {
    name: "Addition",
    symbol: "+"
  },
  subtract: {
    name: "Subtraction",
    symbol: "-"
  },
}

const getRandNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min)
}

const calculateOperation = (key: operationKey, a: number, b: number): number => {
  switch (key) {
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    default:
      return 0
  }
}

export const newEquation = (min: number, max: number, operationKey: operationKey): Equation | null => {
  const operation = OPERATIONS[operationKey]

  if (operation) {
    const a = getRandNumber(min, max)
    const b = getRandNumber(min, max)

    const result = calculateOperation(operationKey, a, b)

    return {
      operation: operation,
      varA: a,
      varB: b,
      result: result,
      text: `${a} ${operation.symbol} ${b}`
    }
  } else {
    return null
  }
}
