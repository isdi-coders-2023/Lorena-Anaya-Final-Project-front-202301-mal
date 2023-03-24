import { rest } from 'msw';
import {
  translationResponseFulfilled,
  translationsResponseFulfilled,
} from './translations-mock';
import { mockedUsers } from './users-mock';

export const handlers = [
  rest.get(
    `https://lorena-anaya-final-project-back-202301.onrender.com/user//translations`,
    (req, res, ctx) => {
      if (translationsResponseFulfilled.failed) {
        return res(
          ctx.status(500),
          ctx.json({ msg: 'Error while fetching translations' }),
        );
      } else if (translationsResponseFulfilled.translations.length > 0) {
        return res(ctx.status(200), ctx.json(translationsResponseFulfilled));
      } else {
        return res(ctx.status(204), ctx.json(translationsResponseFulfilled));
      }
    },
  ),
  rest.post(
    'https://lorena-anaya-final-project-back-202301.onrender.com/auth/register',
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'Succesfully registered!' }),
        );
      }

      if (email === 'alreadyRegisteredEmail@test.com') {
        return res(
          ctx.status(409),
          ctx.json({ msg: 'Error, that user is already registered.' }),
        );
      }

      return res(ctx.status(500), ctx.json({ msg: 'Error while registering' }));
    },
  ),
  rest.post(
    'https://lorena-anaya-final-project-back-202301.onrender.com/auth/login',
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'registeredEmail@test.com') {
        return res(ctx.status(200), ctx.json({ msg: 'You are in!' }));
      }

      if (email === 'notRegisteredEmail@test.com') {
        return res(
          ctx.status(404),
          ctx.json({ msg: 'Error, that user is not registered.' }),
        );
      }

      return res(ctx.status(500), ctx.json({ msg: 'Error while login' }));
    },
  ),

  rest.get(
    'https://lorena-anaya-final-project-back-202301.onrender.com/user/all',
    async (_req, res, ctx) => {
      return res(ctx.json(mockedUsers));
    },
  ),

  rest.get(
    `https://lorena-anaya-final-project-back-202301.onrender.com/translations/:id`,
    (_req, res, ctx) => {
      if (translationResponseFulfilled.failed) {
        return res(
          ctx.status(500),
          ctx.json({ msg: 'Error while fetching translations' }),
        );
      } else {
        return res(ctx.status(200), ctx.json(translationResponseFulfilled));
      }
    },
  ),
];
