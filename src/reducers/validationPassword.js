export default function validationPassword(state = {}, action) {
  if (action.type === "VALIDATION_PASSWORD") {
    return [...state, action.payload];
  }
  return state;
}
