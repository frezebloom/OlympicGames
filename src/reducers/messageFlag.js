export default function messageFlag(state = false, action) {
  if (action.type === "FLAG_MESSAGE") {
    return [...state, action.payload];
  }
  return state;
}
