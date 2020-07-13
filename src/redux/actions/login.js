const loggedIn = payload => {
  return {
    type: 'LOGIN_SUCCESS',
    payload,
  };
};
function logout(props) {
  localStorage.clear()
  props.history.push('/')
}
export {loggedIn,logout}
