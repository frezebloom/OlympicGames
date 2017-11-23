
import { combineReducers } from 'redux';

import validationName from './validationName'
import validationSubname from './validationSubname'
import validationLogin from './validationLogin'
import validationPassword from './validationPassword'

export default combineReducers({
   validationName,
   validationSubname,
   validationLogin,
   validationPassword   
})
