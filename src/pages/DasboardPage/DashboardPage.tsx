import TranslationsList from '../../features/translations/TranslationsList/TranslationsList';
import { DashboardPageContainer, PageTitle } from './DashBoardPageStyled';

export const DashboardPage = () => {
  return (
    <DashboardPageContainer>
      <PageTitle>Assigned Projects</PageTitle>
      <TranslationsList />
    </DashboardPageContainer>
  );
};
