import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ServerErrorPage } from '../../../../pages/error-pages/ServerError/ServerError';
import { Translation } from '../../../../shared/models/translation-model';
import { selectResponseId } from '../../../auth/auth-slice';
import { TranslationCard } from '../../TranslationCard/TranslatorTranslationCard/TranslatorTranslationCard';
import {
  getTranslations,
  selectapiStatus,
  selectTranslations,
} from '../../translations-slice';
import {
  TranslationsFeedbackComponent,
  TranslationsListContainer,
} from './TranslationsListStyled';

const TranslationsList = () => {
  const translations = useAppSelector(selectTranslations);
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectResponseId);
  const apiStatus = useAppSelector(selectapiStatus);

  useEffect(() => {
    dispatch(getTranslations(userId));
  }, [dispatch, userId]);
  return (
    <div>
      {apiStatus === 'failed' && <ServerErrorPage />}
      {apiStatus === 'loading' && (
        <TranslationsFeedbackComponent>
          {`Loading your translations...`}
        </TranslationsFeedbackComponent>
      )}
      {apiStatus === 'idle' && (
        <TranslationsListContainer>
          {translations.length > 0 ? (
            // Si hay traducciones, las mostramos
            translations.map((translation: Translation) => (
              <li key={translation.bookingRef + 'list'}>
                <TranslationCard translation={translation} />
              </li>
            ))
          ) : (
            // Si no hay traducciones, mostramos un mensaje
            <TranslationsFeedbackComponent>
              {`You don't have any assigned translations yet.`}
            </TranslationsFeedbackComponent>
          )}
        </TranslationsListContainer>
      )}
    </div>
  );
};
export default TranslationsList;
