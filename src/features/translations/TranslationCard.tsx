import {
  BookingRef,
  DueDate,
  FlagAndButtonContainer,
  PendingStatusFlag,
  TranslationCardContainer,
  TranslationDetailsButton,
} from './TranslationCardStyled';

export const TranslationCard = () => {
  return (
    <TranslationCardContainer>
      <BookingRef>Booking ref. ES1</BookingRef>
      <DueDate>Due date: 24th March 2023</DueDate>
      <FlagAndButtonContainer>
        <PendingStatusFlag>Pending</PendingStatusFlag>
        <TranslationDetailsButton type="button">
          Details
        </TranslationDetailsButton>
      </FlagAndButtonContainer>
    </TranslationCardContainer>
  );
};
