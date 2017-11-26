export default function showValidation(state = [false], action) {
  if (action.type === "SHOW_VALIDATION") {
    return [...state, action.payload];
  }
  return state;
}
