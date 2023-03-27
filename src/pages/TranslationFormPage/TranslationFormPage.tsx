import { TranslationForm } from '../../features/translations/TranslationForm/TranslationForm';
import { PageTitle } from '../DashboardPage/DashBoardPageStyled';

export const TranslationFormPage = () => {
  return (
    <>
      <PageTitle>Assign a new translation</PageTitle>
      <TranslationForm />
    </>
  );
};
