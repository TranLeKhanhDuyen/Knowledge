import numeral from 'numeral'

export function fCurrency(number: number) {
  return numeral(number).format(Number.isInteger(number) ? '0,000' : '0.000')
}
