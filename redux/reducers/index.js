import { combineReducers } from 'redux';
import frontReducers from '../front/front-reducer';
import profileReducers from '../profile/profile-reducer';

export default combineReducers({
    front: frontReducers,
    profile: profileReducers
});
