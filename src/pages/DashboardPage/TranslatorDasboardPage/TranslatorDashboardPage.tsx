import TranslationsList from '../../../features/translations/TranslationList/TranslatorTranslationsList/TranslationsList';
import { DashboardPageContainer, PageTitle } from '../DashBoardPageStyled';

export const DashboardPage = () => {
  return (
    <DashboardPageContainer>
      <PageTitle>Your Projects</PageTitle>
      <TranslationsList />
    </DashboardPageContainer>
  );
};
