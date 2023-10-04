const stocksReducer = (state = '', action) => {
  switch (action.type) {
    case 'getList':
      return action.payload
    default:
      return state
  }
}

export default stocksReducer
