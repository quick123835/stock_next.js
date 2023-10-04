export const inputChange = value => {
  return {
    type: 'inputChange',
    payload: value
  }
}

export const getStocksList = list => {
  return {
    type: 'getList',
    payload: list
  }
}

export const stockInfo = info => {
  return {
    type: 'getStockInfo',
    payload: info
  }
}
