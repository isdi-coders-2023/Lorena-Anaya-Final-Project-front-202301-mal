import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate('/main/details');
  };

  return (
    <TranslationCardContainer>
      <BookingRef>Booking ref. {translation.bookingRef}</BookingRef>
      <DueDate>{`Due date:  ${day}/${month}/${year}`}</DueDate>
      <FlagAndButtonContainer translationStatus={translation.status}>
        <PendingStatusFlag translationStatus={translation.status}>
          {translation.status}
        </PendingStatusFlag>
        <TranslationDetailsButton type="button" onClick={navigateToDetails}>
          Details
        </TranslationDetailsButton>
      </FlagAndButtonContainer>
    </TranslationCardContainer>
  );
};
