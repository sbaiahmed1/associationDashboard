const init = {
  width: window.outerWidth,
};

const WidthReducer = (state = init, action) => {
  switch (action.type) {
    case 'WIDTH':
      return {
        width: action.payload.width,
      };
    default:
      return state;
  }
};
export default WidthReducer;
