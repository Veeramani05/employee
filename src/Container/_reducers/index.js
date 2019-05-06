import { combineReducers } from 'redux'
import { users } from './user.reducer';
import { authentication } from './authentication.reducer'

const rootReducers = combineReducers({
    users,
    authentication
});
export default rootReducers;