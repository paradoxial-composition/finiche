export const saveTokenInSession = ( token: string ) => {
    sessionStorage.setItem('authToken', token);
};

export const getTokenFromSession = () => {
   return sessionStorage.getItem('authToken');
};

export const removeRokenFromSession = () => {
   return sessionStorage.removeItem('authToken');
};

export const handleErrorMessages = (code: number) => {
   switch(code) {
       case 500: return 'Le serveur est pour le moment surchargé, veuillez réssayer plus tard.';
      //  case 429: return 'Veuillez attendre au moins une minute entre deux recherche consecutive';
       default: return '';
   }
};
