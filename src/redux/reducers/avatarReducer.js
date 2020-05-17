const init = {
  number: null,
};

const AvatarReducer = (state = init, action) => {
  switch (action.type) {
    case 'NUMBER':
      return {
        number: action.payload.number,
      };
    default:
      return state;
  }
};
export default AvatarReducer;
