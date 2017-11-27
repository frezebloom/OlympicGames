import { combineReducers } from "redux";

import validationName from "./validationName";
import validationSurname from "./validationSurname";
import validationLogin from "./validationLogin";
import validationPassword from "./validationPassword";
import showMessage from "./showMessage";
import validationCity from "./validationCity";
import userName from "./userName";
import userSurname from "./userSurname";
import messageFlag from "./messageFlag";
import userLogin from "./userLogin";
import userPassword from "./userPassword";

export default combineReducers({
  validationName,
  validationSurname,
  validationLogin,
  validationPassword,
  showMessage,
  validationCity,
  userName,
  userSurname,
  messageFlag,
  userLogin,
  userPassword
});
