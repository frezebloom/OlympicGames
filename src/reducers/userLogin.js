export default function userName(state = "", action) {
  if (action.type === "USER_LOGIN") {
    return [...state, action.payload];
  }
  return state;
}
