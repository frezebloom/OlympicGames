export default function validationSurname(state = {}, action) {
  if (action.type === "VALIDATION_SURNAME") {
    return [...state, action.payload];
  }
  return state;
}
