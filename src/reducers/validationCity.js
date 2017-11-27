export default function validationCity(state = [], action) {
  if (action.type === "VALIDATION_CITY") {
    return [...state, action.payload];
  }
  return state;
}
