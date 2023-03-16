import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  logUserAsync,
  selectRegisterStatus,
  selectResponseMsg,
  selectStatus,
} from './auth-slice';
import { LoginFormStyled } from './LoginFormStyled';
import {
  ErrorFeedbackComponent,
  FeedBackComponent,
  FormButton,
  FormContainer,
  FormSubtitle,
  FormTitle,
} from './RegisterFormStyled';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const responseStatus = useAppSelector(selectStatus);
  const registerStatus = useAppSelector(selectRegisterStatus);
  const responseMsg = useAppSelector(selectResponseMsg);

  const generateFeedback = () => {
    switch (registerStatus) {
      case 'idle':
        return (
          <FeedBackComponent role="paragraph">
            <img
              className="happy-emoticon"
              src="./assets/icons/happy.png"
              alt="Happy face"
            />
            {responseMsg}
          </FeedBackComponent>
        );
      case 'failed':
        return (
          <>
            <ErrorFeedbackComponent role="paragraph">
              <img
                className="sad-emoticon"
                src="./assets/icons/sad.png"
                alt="Sad face"
              />
              {responseMsg}
            </ErrorFeedbackComponent>
            <FormButton type="submit">Try again</FormButton>
          </>
        );

      default:
        return <FormButton type="submit">Log in</FormButton>;
    }
  };

  return (
    <div>
      <FormContainer>
        <FormTitle>Keeping track of your projects</FormTitle>
        <LoginFormStyled
          onSubmit={e => {
            e.preventDefault();
            dispatch(logUserAsync(e.currentTarget));
          }}
        >
          <FormSubtitle>Enter your details</FormSubtitle>
          <div className="inputs-container">
            <div className="input-container">
              <label htmlFor="email" placeholder=" ">
                Email:
              </label>
              <input
                className="input-box"
                id="email"
                type="email"
                name="email"
                required
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                className="input-box"
                id="password"
                type="password"
                name="password"
                required
              ></input>
            </div>
          </div>
          {responseStatus === 'loading' ? (
            <FeedBackComponent>Loading...</FeedBackComponent>
          ) : (
            generateFeedback()
          )}
        </LoginFormStyled>
      </FormContainer>
    </div>
  );
};
