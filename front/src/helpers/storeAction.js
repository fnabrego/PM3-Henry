export const accessStorage = ()=>{
    const storedStatus =  sessionStorage.getItem('session');
    const storedUser =  sessionStorage.getItem('user');
    const session = storedStatus ? JSON.parse(storedStatus) : false;
    const user = storedUser ? JSON.parse(storedUser):{};

    return {user, session}
}
export const loadStorage = (user, login)=>{
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('session', JSON.stringify(login));
}

export const clearStorage = ()=>{
    sessionStorage.setItem('session', JSON.stringify(false));
    sessionStorage.setItem('user', JSON.stringify(null));
}
