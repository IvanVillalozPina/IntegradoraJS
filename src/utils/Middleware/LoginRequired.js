export function LoginRequired(Component, login_type) {
  return (props) => {
    const user_token = localStorage.getItem('user_token');
    const user_type = localStorage.getItem('user_type');
    if(login_type === 'any' && user_token !== null){
      return <Component {...props} />;
    }
    else if(login_type === 'admin' && user_type === 'admin'){
      return <Component {...props} />;
    }
    else if(login_type === 'user' && user_type === 'user'){
      return <Component {...props} />;
    }
    else if(login_type === 'none'){
      return <Component {...props} />;
    }
    else{
      window.location.href = '/UsersLogin';
    }
  };
}