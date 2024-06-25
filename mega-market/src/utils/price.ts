export const calculateSalePrice = (
  regularPrice: number,
  discount: number
): string => {
  return ((regularPrice * discount) / 100).toFixed(2)
}

export const calculateSavePrice = (
  regularPrice: number,
  discount: number
): string => {
  return (regularPrice - (regularPrice * discount) / 100).toFixed(2)
}

export const calculateTotalPrice = (
  price: number,
  quantity: number
): string => {
  return (price * quantity).toFixed(2)
}

export const calculateTotalBill = (
  regularPrice: number,
  quantity: number,
  discount: number
) => {
  return ((regularPrice - (regularPrice * discount) / 100) * quantity).toFixed(
    2
  )
}
