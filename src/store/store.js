const initialState = {
  users: [],
};

export const persistedState = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : initialState;

const SET_USERS = "SET_USERS";
const SAVE_LIKE = "SAVE_LIKE";

export const setDataOfUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const saveLike = (id, pressed) => ({
  type: SAVE_LIKE,
  id,
  pressed,
});

function _rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SAVE_LIKE:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id == action.id ? { ...item, like: action.pressed } : item
        ),
      };
    default:
      return state;
  }
}

export function rootReducer(state = initialState, action) {
  const newState = _rootReducer(state, action);
  localStorage.setItem("users", JSON.stringify(newState));
  return newState;
}
