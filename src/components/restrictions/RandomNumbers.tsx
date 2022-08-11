type RandomNumber =  {
    value: number
}

type isPositiveNumber = RandomNumber & {
    isPositive?: boolean
    isNegative?: never
}

type isNegativeNumber = RandomNumber & {
    isNegative?: boolean
    isPositive: never
}

type RandomNumbersProps = isPositiveNumber | isNegativeNumber

const RandomNumbers = (
    {value, isPositive, isNegative}: RandomNumbersProps
) => {
  return (
    <div>
        <h3>Value: {value} is {isPositive && 'positive'} {isNegative && 'negative'}</h3>
    </div>
  )
}

export default RandomNumbers