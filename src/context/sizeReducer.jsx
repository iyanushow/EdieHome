export default (state, action) => {
  switch (action.type) {
    case 'SET_SIZE':
      return action.payload;
      break;

    default:
      return;
      break;
  }
};
