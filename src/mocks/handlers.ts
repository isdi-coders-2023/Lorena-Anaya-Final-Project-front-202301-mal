import { rest } from 'msw';

export const handlers = [
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
        return res(ctx.status(201), ctx.json({ msg: 'You are in!' }));
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
];
