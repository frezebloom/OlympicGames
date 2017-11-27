export default function showMessage(state = false, action) {
  if (action.type === "SHOW_MESSAGE") {
    return [...state, action.payload];
  }
  return state;
}
