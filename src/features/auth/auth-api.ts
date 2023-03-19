import { loginUser, newUser } from '../../shared/models/user-model';

export const registerUser = async (user: newUser) => {
  const response = await fetch(
    'https://lorena-anaya-final-project-back-202301.onrender.com/auth/register',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return response;
};

export const logUser = async (user: loginUser) => {
  const response = await fetch(
    'https://lorena-anaya-final-project-back-202301.onrender.com/auth/login',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return response;
};
