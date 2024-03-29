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

export const updateTranslationById = async (
  updatedTranslation: FormData,
  id: string,
) => {
  const response = await fetch(
    `https://lorena-anaya-final-project-back-202301.onrender.com/translations/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Bearer')}`,
      },
      body: updatedTranslation,
    },
  );

  return response;
};

export const updateTranslationStatus = async (
  translationStatus: string,
  id: string,
) => {
  const response = await fetch(
    `https://lorena-anaya-final-project-back-202301.onrender.com/translations/status/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: translationStatus }),
    },
  );

  return response;
};

export const getTranslationsList = async () => {
  const response = await fetch(
    `https://lorena-anaya-final-project-back-202301.onrender.com/translations`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const deleteTranslationById = async (id: string) => {
  const response = await fetch(
    `https://lorena-anaya-final-project-back-202301.onrender.com/translations/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};
