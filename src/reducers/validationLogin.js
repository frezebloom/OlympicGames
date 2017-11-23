export default function validationLogin(state = {}, action) {
  if (action.type === "VALIDATION_LOGIN") {
    return [...state, action.payload];
  }
  return state;
}
