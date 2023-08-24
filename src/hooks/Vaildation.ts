import { useState, useEffect } from 'react';
import { AuthForm } from '../types';

export default function useValidation({ email, password }: AuthForm) {
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
  });

  useEffect(() => {
    const checkEmail = email.includes('@');
    const checkPassword = password.length > 7;
    setIsValid(() => ({ isEmail: checkEmail, isPassword: checkPassword }));
  }, [email, password]);

  return { isValid };
}
