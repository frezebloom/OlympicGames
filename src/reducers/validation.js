export default function validation(state = false, action) {
  if (action.type === "VALIDATION") {
    return [...state, action.payload];
  }
  return state;
}
