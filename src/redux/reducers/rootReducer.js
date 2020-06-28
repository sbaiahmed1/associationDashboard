import LoginReducer from './authReducer';
import {combineReducers} from 'redux';
import WidthReducer from './widthReducer';

const RootReducer = combineReducers({
  login: LoginReducer,
  width: WidthReducer,
});
export default RootReducer;
