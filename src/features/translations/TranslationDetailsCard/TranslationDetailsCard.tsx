import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { NotFoundPage } from '../../../pages/error-pages/404Page/404Page';
import { Translation } from '../../../shared/models/translation-model';
import {
  ErrorFeedbackComponent,
  FeedBackComponent,
} from '../../auth/register/RegisterFormStyled';
import {
  getTranslationsByIdAsync,
  selectapiStatus,
  selectTranslation,
  selectTranslationUploadStatus,
  updateTranslationByIdAsync,
  updateTranslationStatusAsync,
} from '../translations-slice';
import { TranslationsFeedbackComponent } from '../TranslationsList/TranslationsListStyled';
import {
  DownloadLink,
  InfoContainer,
  Property,
  PropertyInfo,
  TranslationCardContainer,
  TranslationDetailsCardStyled,
  UploadButton,
  UploadButtonContainer,
  UploadContainer,
  UploadText,
} from './TranslationDetailsCardStyled';

export const TranslationDetailsCard = () => {
  const translation: Translation = useAppSelector(selectTranslation);

  const apiStatus = useAppSelector(selectapiStatus);

  const uploadStatus = useAppSelector(selectTranslationUploadStatus);

  const dispatch = useAppDispatch();

  let { translationId } = useParams();

  useEffect(() => {
    dispatch(getTranslationsByIdAsync(translationId as string));
  }, [dispatch, translationId]);

  const dueDate = new Date(translation.dueDate);
  const day = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();

  const generateFeedback = () => {
    switch (uploadStatus) {
      case 'idle':
        return (
          <>
            <FeedBackComponent role="paragraph">
              <img
                className="happy-emoticon"
                src="/assets/icons/happy.png"
                alt="Happy face"
              />
              Translation succesfully uploaded!
            </FeedBackComponent>
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
              The translation couldn’t be uploaded, please try again.
            </ErrorFeedbackComponent>
            <UploadButtonContainer>
              <UploadButton>Upload</UploadButton>
            </UploadButtonContainer>
          </>
        );

      default:
        return (
          <UploadButtonContainer>
            <UploadButton>Upload</UploadButton>
          </UploadButtonContainer>
        );
    }
  };

  if (apiStatus === 'idle' && translation._id !== undefined) {
    return (
      <>
        <TranslationCardContainer>
          <TranslationDetailsCardStyled>
            <InfoContainer>
              <Property role="paragraph">Booking ref.</Property>
              <PropertyInfo role="paragraph">
                {translation.bookingRef}
              </PropertyInfo>
            </InfoContainer>

            <InfoContainer>
              <Property role="paragraph">Due date:</Property>
              <PropertyInfo role="paragraph">
                {` ${day}/${month}/${year}`}
              </PropertyInfo>
            </InfoContainer>

            <InfoContainer>
              <Property role="paragraph">Source:</Property>
              <PropertyInfo role="paragraph">
                {translation.languageFrom}
              </PropertyInfo>
            </InfoContainer>

            <InfoContainer>
              <Property role="paragraph">Target:</Property>
              <PropertyInfo role="paragraph">
                {translation.languageTo}
              </PropertyInfo>
            </InfoContainer>

            <InfoContainer>
              <Property role="paragraph">Nº of words:</Property>
              <PropertyInfo role="paragraph">{translation.words}</PropertyInfo>
            </InfoContainer>

            <InfoContainer>
              <Property role="paragraph">Status:</Property>
              <PropertyInfo role="paragraph">{translation.status}</PropertyInfo>
            </InfoContainer>

            <InfoContainer>
              <Property role="paragraph">Doc to translate:</Property>
              <PropertyInfo role="paragraph">
                <DownloadLink
                  href={translation.toTranslateDoc}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to download
                </DownloadLink>
              </PropertyInfo>
            </InfoContainer>
          </TranslationDetailsCardStyled>
          <UploadContainer>
            <UploadText role="paragraph">
              Upload here your translation once completed:
            </UploadText>
            <form
              onSubmit={e => {
                e.preventDefault();
                const form = e.currentTarget;
                const id = translationId as string;
                dispatch(updateTranslationByIdAsync({ form, id: id }));
                dispatch(
                  updateTranslationStatusAsync({ status: 'Completed', id: id }),
                );
              }}
            >
              <label className="input-file__label" htmlFor="translatedDoc">
                Click to choose a file
              </label>
              <input
                className="input-file-box"
                id="translatedDoc"
                type="file"
                name="translatedDoc"
                accept=".pdf"
                style={{ visibility: 'hidden' }}
                required
              ></input>
              {uploadStatus === 'loading' ? (
                <FeedBackComponent>Loading...</FeedBackComponent>
              ) : (
                generateFeedback()
              )}
            </form>
          </UploadContainer>
        </TranslationCardContainer>
      </>
    );
  } else if (apiStatus === 'loading') {
    return (
      <TranslationsFeedbackComponent>
        {`Loading your translation details...`}
      </TranslationsFeedbackComponent>
    );
  } else {
    return <NotFoundPage />;
  }
};
