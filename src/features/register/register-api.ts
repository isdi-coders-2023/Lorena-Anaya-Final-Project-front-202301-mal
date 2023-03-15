import { User } from '../../shared/models/user-model';

export const registerUser = async (user: User) => {
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
