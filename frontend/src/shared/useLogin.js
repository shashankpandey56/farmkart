import { useState, useEffect } from 'react';

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'));
  //   console.log(user);
  //   console.log('useLogin: ==> ');

  //   console.log(user.success);
  //   console.log(user.user.name);

  useEffect(() => {
    user.success ? setIsLogin(true) : setIsLogin(false);
  }, []);
  //   console.log(isLogin);

  return isLogin;
};

export default useLogin;
