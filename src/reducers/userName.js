export default function userLogin(state = "", action) {
  if (action.type === "USER_NAME") {
    return [...state, action.payload];
  }
  return state;
}
