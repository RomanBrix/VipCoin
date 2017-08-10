import { combineReducers } from 'redux';
import frontReducers from '../front/front-reducer';


export default combineReducers({
    front: frontReducers
});
