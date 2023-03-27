import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ServerErrorPage } from '../../../../pages/error-pages/ServerError/ServerError';
import { Translation } from '../../../../shared/models/translation-model';
import { AdminTranslationCard } from '../../TranslationCard/AdminTranslationCard/AdminTranslationCard';
import {
  getAllTranslationsAsync,
  selectAdminTranslations,
  selectadminTranslationsStatus,
} from '../../translations-slice';
import {
  TranslationsFeedbackComponent,
  TranslationsListContainer,
} from './TranslationsListStyled';

const AdminTranslationsList = () => {
  const adminTranslations = useAppSelector(selectAdminTranslations);

  const dispatch = useAppDispatch();

  const adminTranslationsStatus = useAppSelector(selectadminTranslationsStatus);

  useEffect(() => {
    dispatch(getAllTranslationsAsync());
  }, [dispatch]);
  return (
    <div>
      {adminTranslationsStatus === 'failed' && <ServerErrorPage />}
      {adminTranslationsStatus === 'loading' && (
        <TranslationsFeedbackComponent>
          {`Loading your projects...`}
        </TranslationsFeedbackComponent>
      )}
      {adminTranslationsStatus === 'idle' && (
        <TranslationsListContainer>
          {adminTranslations.length > 0 ? (
            // Si hay traducciones, las mostramos
            adminTranslations.map((translation: Translation) => (
              <li key={translation.bookingRef + 'list'}>
                <AdminTranslationCard translation={translation} />
              </li>
            ))
          ) : (
            // Si no hay traducciones, mostramos un mensaje
            <TranslationsFeedbackComponent>
              {`You haven’t assigned a translation yet. `}
            </TranslationsFeedbackComponent>
          )}
        </TranslationsListContainer>
      )}
    </div>
  );
};
export default AdminTranslationsList;
