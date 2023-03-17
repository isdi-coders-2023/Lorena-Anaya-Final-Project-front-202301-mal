import { TranslationCard } from '../../features/translations/TranslationCard';
import {
  DashboardPageContainer,
  DashBoardPageTitle,
} from './DashBoardPageStyled';

export const DashboardPage = () => {
  return (
    <DashboardPageContainer>
      <DashBoardPageTitle>Assigned Projects</DashBoardPageTitle>
      <TranslationCard />
    </DashboardPageContainer>
  );
};
