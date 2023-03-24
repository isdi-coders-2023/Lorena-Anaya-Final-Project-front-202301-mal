import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { NotFoundPage } from '../../../pages/error-pages/404Page/404Page';
import { Translation } from '../../../shared/models/translation-model';
import {
  getTranslationsByIdAsync,
  selectapiStatus,
  selectTranslation,
} from '../translations-slice';
import { TranslationsFeedbackComponent } from '../TranslationsList/TranslationsListStyled';
import {
  DownloadLink,
  InfoContainer,
  Property,
  PropertyInfo,
  TranslationCardContainer,
  TranslationDetailsCardStyled,
} from './TranslationDetailsCardStyled';

export const TranslationDetailsCard = () => {
  const translation: Translation = useAppSelector(selectTranslation);

  const apiStatus = useAppSelector(selectapiStatus);

  const dispatch = useAppDispatch();

  let { translationId } = useParams();

  useEffect(() => {
    dispatch(getTranslationsByIdAsync(translationId as string));
  }, [dispatch, translationId]);

  const dueDate = new Date(translation.dueDate);
  const day = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();

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
                  Download
                </DownloadLink>
              </PropertyInfo>
            </InfoContainer>

            <InfoContainer>
              <Property role="paragraph">Doc translated:</Property>
              <PropertyInfo role="paragraph">
                {translation.translatedDoc}
              </PropertyInfo>
            </InfoContainer>
          </TranslationDetailsCardStyled>
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
