export default function userSurname(state = "", action) {
  if (action.type === "USER_SURNAME") {
    return [...state, action.payload];
  }
  return state;
}
