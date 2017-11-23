
import { combineReducers } from 'redux';

import validationName from './validationName'
import validationSurname from './validationSurname'
import validationLogin from './validationLogin'
import validationPassword from './validationPassword'

export default combineReducers({
   validationName,
   validationSurname,
   validationLogin,
   validationPassword
})
