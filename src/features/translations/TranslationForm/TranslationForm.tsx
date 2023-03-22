import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  ButtonContainer,
  SubmitFormButton,
} from '../../../pages/TranslationFormPage/TranslationFormPageStyled';
import { User } from '../../../shared/models/user-model';
import {
  ErrorFeedbackComponent,
  FeedBackComponent,
  FormContainer,
} from '../../auth/register/RegisterFormStyled';
import { getAllUsers, selectUsers } from '../../users/users-slice';
import { createTranslationAsync, selectapiStatus } from '../translations-slice';
import { CreateTranslationForm } from './TranslationFormStyled';

export const TranslationForm = () => {
  const dispatch = useAppDispatch();
  const apiStatus = useAppSelector(selectapiStatus);
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const generateFeedback = () => {
    switch (apiStatus) {
      case 'idle':
        return (
          <>
            <FeedBackComponent role="paragraph">
              <img
                className="happy-emoticon"
                src="/assets/icons/happy.png"
                alt="Happy face"
              />
              Translation succesfully created!
            </FeedBackComponent>
            <ButtonContainer>
              <SubmitFormButton type="submit" form="translation-form">
                Try again
              </SubmitFormButton>
            </ButtonContainer>
          </>
        );
      case 'failed':
        return (
          <>
            <ErrorFeedbackComponent role="paragraph">
              <img
                className="sad-emoticon"
                src="/assets/icons/sad.png"
                alt="Sad face"
              />
              The project couldn’t be created, please try again.
            </ErrorFeedbackComponent>
            <ButtonContainer>
              <SubmitFormButton type="submit" form="translation-form">
                Try again
              </SubmitFormButton>
            </ButtonContainer>
          </>
        );

      default:
        return (
          <ButtonContainer>
            <SubmitFormButton type="submit" form="translation-form">
              Submit
            </SubmitFormButton>
          </ButtonContainer>
        );
    }
  };

  return (
    <div>
      <FormContainer>
        <CreateTranslationForm
          id="translation-form"
          onSubmit={e => {
            e.preventDefault();
            dispatch(createTranslationAsync(e.currentTarget));
          }}
        >
          <div className="inputs-container">
            <div className="input-container">
              <label htmlFor="dueDate" placeholder=" ">
                Due date:
              </label>
              <input
                className="input-box"
                id="dueDate"
                type="date"
                name="dueDate"
                required
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="words">Number of words:</label>
              <input
                className="input-box"
                id="words"
                type="number"
                name="words"
                required
              ></input>
            </div>

            <div className="input-container">
              <label htmlFor="source"> Source:</label>
              <select className="input-box" name="languageFrom" id="source">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="target">Target:</label>
              <select className="input-box" name="languageTo" id="target">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="translator">Translator:</label>
              <select className="input-box" name="translator" id="translator">
                {users.map((user: User) => (
                  <option key={user.lastName}>{user.firstName}</option>
                ))}
              </select>
            </div>
            <div className="input-container">
              <label className="input-file__label" htmlFor="toTranslateDoc">
                Upload translation
              </label>
              <input
                className="input-file-box"
                id="toTranslateDoc"
                type="file"
                name="toTranslateDoc"
                accept=".pdf"
                style={{ visibility: 'hidden' }}
                required
              ></input>
            </div>
          </div>
        </CreateTranslationForm>
      </FormContainer>
      {apiStatus === 'loading' ? (
        <FeedBackComponent>Loading...</FeedBackComponent>
      ) : (
        generateFeedback()
      )}
    </div>
  );
};
