import AdminTranslationsList from '../../../features/translations/TranslationList/AdminTranslationsList/AdminTranslationsList';
import { DashboardPageContainer, PageTitle } from '../DashBoardPageStyled';
import {
  AddIcon,
  CreateLink,
  TopSectionContainer,
} from './DashBoardPageStyled';

export const AdminDashboardPage = () => {
  return (
    <DashboardPageContainer>
      <TopSectionContainer>
        <PageTitle>Assigned Projects</PageTitle>
        <CreateLink to={'/admin/create'}>
          <AddIcon src="/assets/icons/add.png" alt="Add icon"></AddIcon>
          Assign a new project
        </CreateLink>
      </TopSectionContainer>
      <AdminTranslationsList />
    </DashboardPageContainer>
  );
};
