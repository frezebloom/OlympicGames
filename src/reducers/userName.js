export default function userName(state = "", action) {
  if (action.type === "USER_NAME") {
    return [...state, action.payload];
  }
  return state;
}
