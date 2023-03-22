export const getUsersList = async () => {
  const response = await fetch(
    `https://lorena-anaya-final-project-back-202301.onrender.com/user/all`,
  );

  return response;
};
