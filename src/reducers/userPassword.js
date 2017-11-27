export default function userPassword(state = "", action) {
  if (action.type === "USER_PASSWORD") {
    return [...state, action.payload];
  }
  return state;
}
