// authReducer.js
const initialState = {
    user: null,
  };
  
// authReducer.js
const authReducer = (state = initialState, action) => {
  console.log(action.type, action.payload); // Log action type and payload
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // Update localStorage here
      const { user } = action.payload;
      window.localStorage.setItem("token", user.accessToken);
      window.localStorage.setItem("id", user.id);
      window.localStorage.setItem("name", user.name);
      window.localStorage.setItem("email", user.email);
      window.localStorage.setItem("role", user.role);
      window.localStorage.setItem("login", 1);

      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      // Clear localStorage on logout if needed
      window.localStorage.clear();
      
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};


  export default authReducer;
  