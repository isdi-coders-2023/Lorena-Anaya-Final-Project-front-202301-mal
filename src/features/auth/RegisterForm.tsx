import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectRegisterStatus,
  selectResponseMsg,
  selectStatus,
  sendUser,
} from './auth-slice';
import {
  FormButton,
  RegisterFormContainer,
  RegisterFormStyled,
  RegisterFormSubtilte,
  RegisterFormTitle,
  FeedBackComponent,
  ErrorFeedbackComponent,
} from './RegisterFormStyled';

export const RegisterForm = () => {
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
            <FormButton type="submit">Try again</FormButton>;
          </>
        );

      default:
        return <FormButton type="submit">Sign up</FormButton>;
    }
  };

  return (
    <div>
      <RegisterFormContainer>
        <RegisterFormTitle aria-label="heading">
          Complete your registration
        </RegisterFormTitle>
        <RegisterFormStyled
          onSubmit={e => {
            e.preventDefault();
            dispatch(sendUser(e.currentTarget));
          }}
        >
          <RegisterFormSubtilte>Enter your details</RegisterFormSubtilte>
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
              <label htmlFor="first-name">First name:</label>
              <input
                className="input-box"
                id="first-name"
                type="text"
                name="firstName"
                required
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="last-name">Last name:</label>
              <input
                className="input-box"
                id="last-name"
                type="text"
                name="lastName"
                required
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="phone">Phone:</label>
              <input
                className="input-box"
                id="phone"
                type="text"
                name="phone"
                required
                minLength={9}
                maxLength={9}
                pattern="[0-9]+"
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="languages">Languages:</label>
              <input
                className="input-box"
                id="languages"
                type="text"
                name="languages"
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
        </RegisterFormStyled>
      </RegisterFormContainer>
    </div>
  );
};
