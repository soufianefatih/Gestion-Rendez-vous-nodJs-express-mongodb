  
  export const logout = () => ({
    type: 'LOGOUT',
  });

  // Action
export const loginSuccess = (user) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: { user },
    };
  };