export const saveTokenInSession = ( token: string ) => {
    sessionStorage.setItem('authToken', token);
};

export const getTokenFromSession = () => {
   return sessionStorage.getItem('authToken');
};

export const removeRokenFromSession = () => {
   return sessionStorage.removeItem('authToken');
};
