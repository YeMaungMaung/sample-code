export default function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
        isAuth: false,
      };
    default:
      return state;
  }
}
