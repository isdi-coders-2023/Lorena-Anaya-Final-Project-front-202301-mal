import { TranslationForm } from '../../features/translations/TranslationForm/TranslationForm';
import { PageTitle } from '../DasboardPage/DashBoardPageStyled';
import { ButtonContainer, SubmitFormButton } from './TranslationFormPageStyled';

export const TranslationFormPage = () => {
  return (
    <>
      <PageTitle>Assign a new translation</PageTitle>
      <TranslationForm />
      <ButtonContainer>
        <SubmitFormButton type="submit">Submit</SubmitFormButton>
      </ButtonContainer>
    </>
  );
};
