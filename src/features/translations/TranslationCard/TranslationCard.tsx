import { FC } from 'react';
import { Translation } from '../../../shared/models/translation-model';
import {
  BookingRef,
  DueDate,
  FlagAndButtonContainer,
  PendingStatusFlag,
  TranslationCardContainer,
  TranslationDetailsButton,
} from '../TranslationCard/TranslationCardStyled';

interface TranslationCardProps {
  translation: Translation;
}

export const TranslationCard: FC<TranslationCardProps> = ({ translation }) => {
  const dueDate = new Date(translation.dueDate);
  const day = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();

  return (
    <TranslationCardContainer>
      <BookingRef>Booking ref. {translation.bookingRef}</BookingRef>
      <DueDate>{`Due date:  ${day}/${month}/${year}`}</DueDate>
      <FlagAndButtonContainer translationStatus={translation.status}>
        <PendingStatusFlag translationStatus={translation.status}>
          {translation.status}
        </PendingStatusFlag>
        <TranslationDetailsButton type="button">
          Details
        </TranslationDetailsButton>
      </FlagAndButtonContainer>
    </TranslationCardContainer>
  );
};
