const sizeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SIZE':
      return action.payload;

    default:
      return;
  }
};

export default sizeReducer;
