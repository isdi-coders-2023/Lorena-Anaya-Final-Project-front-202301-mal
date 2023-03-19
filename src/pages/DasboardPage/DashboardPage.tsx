import TranslationsList from '../../features/translations/TranslationsList/TranslationsList';
import {
  DashboardPageContainer,
  DashBoardPageTitle,
} from './DashBoardPageStyled';

export const DashboardPage = () => {
  return (
    <DashboardPageContainer>
      <DashBoardPageTitle>Assigned Projects</DashBoardPageTitle>
      <TranslationsList />
    </DashboardPageContainer>
  );
};
