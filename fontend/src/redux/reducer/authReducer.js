// authReducer.js
const initialState = {
    user: null,
  };
// authReducer.js
const authReducer = (state = initialState, action) => {
  console.log(action.type, action.payload); // Log action type and payload
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { user, accessToken } = action.payload;

      if (user && accessToken) {
        window.localStorage.setItem("token", accessToken);
        window.localStorage.setItem("id", user.id);
        window.localStorage.setItem("name", user.name);
        window.localStorage.setItem("email", user.email);
        window.localStorage.setItem("role", user.role);
        window.localStorage.setItem("login", 1);
      } else {
        console.error('Error: Missing or invalid accessToken in user object', user);
        // Handle the error, for example, redirect to an error page or display a message to the user
      }

      return {
        ...state,
        user: user,
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
  