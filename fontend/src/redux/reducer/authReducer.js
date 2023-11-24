// authReducer.js
const initialState = {
    user: null,
  };
// authReducer.js
const authReducer = (state = initialState, action) => {
  console.log(action.type, action.payload); // Log action type and payload
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { user } = action.payload;

      if (user) {
        // Check if accessToken is present in user object
        const accessToken = user.accessToken || null;

        if (accessToken) {
          window.localStorage.setItem("token", accessToken);
          window.localStorage.setItem("id", user.id);
          window.localStorage.setItem("name", user.name);
          window.localStorage.setItem("email", user.email);
          window.localStorage.setItem("role", user.role);
          window.localStorage.setItem("login", 1);
        } else {
          console.error('Error: Missing or invalid accessToken in user object', user);
          // Handle the error, for example, redirect to an error page or display a message to the user
          // You might dispatch another action to handle the error in a more structured way
        }
      } else {
        console.error('Error: Missing user object in the response', action.payload);
        // Handle the error, for example, redirect to an error page or display a message to the user
        // You might dispatch another action to handle the error in a more structured way
      }

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
  