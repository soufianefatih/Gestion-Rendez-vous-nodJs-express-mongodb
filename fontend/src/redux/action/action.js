  
  export const logout = () => ({
    type: 'LOGOUT',
  });

  // Action
export const loginSuccess = (userData) => {
  const { user, accessToken } = userData;
  return {
    type: 'LOGIN_SUCCESS',
    payload: { user, accessToken },
  };
};
