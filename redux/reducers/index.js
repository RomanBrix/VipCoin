import { combineReducers } from 'redux';
import frontReducers from '../front/front-reducer';
import profileReducers from '../profile/profile-reducer';
import adminReducers from '../admin/admin-reducer';

export default combineReducers({
    front: frontReducers,
    profile: profileReducers,
    admin: adminReducers
});
