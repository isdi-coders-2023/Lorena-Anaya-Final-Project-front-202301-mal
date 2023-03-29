import { PageTitle } from '../DashboardPage/DashBoardPageStyled';
import {
  EnquiriesSection,
  EnquiriesText,
  WarningText,
} from './EnquiriesPageStyled';

export const EnquiriesPage = () => {
  return (
    <>
      <PageTitle>Enquiries</PageTitle>
      <EnquiriesSection>
        <EnquiriesText>
          If you have any queries or if you are unable to meet the deadline,
          please contact your project manager on{' '}
          <span className="phone-number">+(34) 699 954 493</span> or at{' '}
          <span className="email">translationteam@btc365.net</span>
        </EnquiriesText>
        <WarningText>
          Meeting deadlines and reviewing your work before uploading is very
          important
        </WarningText>
      </EnquiriesSection>
    </>
  );
};
