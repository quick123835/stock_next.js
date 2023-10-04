const stockInfoReducer = (state = '', action) => {
  switch (action.type) {
    case 'getStockInfo':
      return action.payload
    default:
      return state
  }
}

export default stockInfoReducer
