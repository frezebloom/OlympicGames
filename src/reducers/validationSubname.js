export default function validationSubname(state = {}, action) {
  if (action.type === "VALIDATION_SUBNAME") {
    return [...state, action.payload];
  }
  return state;
}
