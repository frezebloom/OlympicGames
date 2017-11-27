export default function validationName(state = [], action) {
  if (action.type === "VALIDATION_NAME") {
    return [...state, action.payload];
  }
  return state;
}
