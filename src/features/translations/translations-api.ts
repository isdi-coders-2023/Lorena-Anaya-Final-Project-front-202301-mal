export const getUserTranslationsList = async (id: string) => {
  const response = await fetch(
    `https://lorena-anaya-final-project-back-202301.onrender.com/user/${id}/translations`,
  );

  return response;
};

export const createTranslation = async (translationInfo: FormData) => {
  const response = await fetch(
    'https://lorena-anaya-final-project-back-202301.onrender.com/translations/create',
    {
      method: 'POST',
      body: translationInfo,
    },
  );

  return response;
};
