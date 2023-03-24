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
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Bearer')}`,
      },
      body: translationInfo,
    },
  );

  return response;
};

export const getTranslationById = async (id: string) => {
  const response = await fetch(
    `https://lorena-anaya-final-project-back-202301.onrender.com/translations/${id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Bearer')}`,
      },
    },
  );

  return response;
};
