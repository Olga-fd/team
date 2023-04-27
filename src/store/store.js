const initialState = {
  users: [],
  pressed: false,
};

export const persistedState = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : initialState;

const SET_USERS = "SET_USERS";
const SET_LIKE = "SET_LIKE";

export const setDataOfUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setPressedLike = (pressed) => ({
  type: SET_LIKE,
  pressed,
});

function _rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_LIKE:
      return {
        ...state,
        pressed: action.pressed,
      };
    // case ADD_PAUSE:
    //   return {
    //     ...state,
    //     statData: state.statData.map((item) =>
    //       item.id == action.id
    //         ? {
    //             ...item,
    //             [action.day]: {
    //               ...item[action.day],
    //               pause: action.pause,
    //             },
    //           }
    //         : item
    //     ),
    //   };
    // case ADD_TIME:
    //   return {
    //     ...state,
    //     toDoList: state.toDoList.map((item) =>
    //       item.id == action.id ? { ...item, time: action.time } : item
    //     ),
    //   };
    // case CREATE_TASK:
    //   return {
    //     ...state,
    //     toDoList: state.toDoList.concat([
    //       {
    //         id: action.id,
    //         title: action.title,
    //         quantity: action.quantity,
    //         time: action.time,
    //       },
    //     ]),
    //   };
    // case CREATE_DATA:
    //   return {
    //     ...state,
    //     statData: state.statData.concat([
    //       {
    //         id: action.id,
    //         [action.day]: {
    //           time: action.time,
    //           tomato: action.tomato,
    //           focus: action.focus,
    //           pause: action.pause,
    //           stops: action.stops,
    //         },
    //       },
    //     ]),
    //   };
    // case CHANGE_WEEK:
    //   return {
    //     ...state,
    //     numberOfWeek: action.arr,
    //   };
    // case DELETE_TASK:
    //   return {
    //     ...state,
    //     toDoList: state.toDoList.filter((item) => item.id != action.id),
    //   };
    // case GET_NAME_DAY:
    //   return {
    //     ...state,
    //     nameOfDay: action.name,
    //   };
    // case GET_DAY:
    //   return {
    //     ...state,
    //     selectedDay: action.day,
    //   };
    // case GET_CURRENT_DAY:
    //   return {
    //     ...state,
    //     currentDay: action.day,
    //   };
    // case GET_TOMATO:
    //   return {
    //     ...state,
    //     statData: state.statData.map((item) =>
    //       item.id == action.id
    //         ? {
    //             ...item,
    //             [action.day]: {
    //               ...item[action.day],
    //               time: action.time,
    //               tomato: action.tomato,
    //             },
    //           }
    //         : item
    //     ),
    //   };
    // case MINUS_QUANTITY:
    //   return {
    //     ...state,
    //     toDoList: state.toDoList.map((item) =>
    //       item.id == action.id
    //         ? { ...item, quantity: action.quantity, time: action.time }
    //         : item
    //     ),
    //   };
    // case SET_THEME:
    //   return {
    //     ...state,
    //     lightTheme: action.theme,
    //   };
    // case SET_NAME:
    //   return {
    //     ...state,
    //     isTitled: action.status,
    //   };
    // case SAVE_ID:
    //   return {
    //     ...state,
    //     indexTask: action.id,
    //   };
    // case SAVE_COUNT:
    //   return {
    //     ...state,
    //     countClick: action.click,
    //   };
    // case SAVE_WEEK:
    //   return {
    //     ...state,
    //     numberOfWeek: state.numberOfWeek.concat(action.weekNum),
    //   };
    // case SET_SEL_DAY:
    //   return {
    //     ...state,
    //     selectedDay: action.day,
    //   };
    // case SET_SEL_TITLE:
    //   return {
    //     ...state,
    //     selectedTitle: action.title,
    //   };
    // case SET_GOTTEN:
    //   return {
    //     ...state,
    //     isGotten: action.status,
    //   };
    // case SET_DROPDOWN:
    //   return {
    //     ...state,
    //     isDropOpened: action.status,
    //   };
    // case SET_FOUND:
    //   return {
    //     ...state,
    //     isFound: action.status,
    //   };
    // case SET_ONE_TOMATO:
    //   return {
    //     ...state,
    //     oneTomato: action.num,
    //   };
    // case SET_SHORT_BREAK:
    //   return {
    //     ...state,
    //     shortBreak: action.num,
    //   };
    // case SET_LONG_BREAK:
    //   return {
    //     ...state,
    //     longBreak: action.num,
    //   };
    // case SET_NUM_TASK:
    //   return {
    //     ...state,
    //     numOfTask: action.num,
    //   };
    // case SET_LIMIT:
    //   return {
    //     ...state,
    //     limit: action.limit,
    //   };
    // case SET_WEEK:
    //   return {
    //     ...state,
    //     selectedWeek: action.weekNum,
    //   };
    // case SET_FOCUS:
    //   return {
    //     ...state,
    //     statData: state.statData.map((item) =>
    //       item.id == action.id
    //         ? {
    //             ...item,
    //             [action.day]: {
    //               ...item[action.day],
    //               focus: action.focus,
    //             },
    //           }
    //         : item
    //     ),
    //   };
    // case UPDATE_TASK:
    //   return {
    //     ...state,
    //     toDoList: state.toDoList.map((item) =>
    //       item.id == action.id
    //         ? {
    //             ...item,
    //             quantity: action.quantity,
    //             time: action.time,
    //           }
    //         : item
    //     ),
    //   };
    // case UPDATE_DATA_DAY:
    //   return {
    //     ...state,
    //     statData: state.statData.map((item) =>
    //       item.id == action.id
    //         ? {
    //             ...item,
    //             [action.day]: {
    //               time: 0,
    //               tomato: 0,
    //               focus: 0,
    //               pause: 0,
    //               stops: 0,
    //             },
    //           }
    //         : item
    //     ),
    //   };
    // case UPDATE_TITLE:
    //   return {
    //     ...state,
    //     toDoList: state.toDoList.map((item) =>
    //       item.id == action.id
    //         ? {
    //             ...item,
    //             title: action.title,
    //           }
    //         : item
    //     ),
    //   };
    // case UPDATE_STATUS:
    //   return {
    //     ...state,
    //     isModalOpened: action.status,
    //   };
    default:
      return state;
  }
}

export function rootReducer(state = initialState, action) {
  const newState = _rootReducer(state, action);
  localStorage.setItem("pomodoro", JSON.stringify(newState));
  return newState;
}
