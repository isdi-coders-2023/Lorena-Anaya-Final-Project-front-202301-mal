import { FC } from 'react';

import { Translation } from '../../../../shared/models/translation-model';
import {
  BookingRef,
  DetailsLink,
  DueDate,
  FlagAndButtonContainer,
  PendingStatusFlag,
  TranslationCardContainer,
} from '../TranslationCardStyled';
import { DeleteIcon } from './AdminTranslationCardStyled';

interface AdminTranslationCardProps {
  translation: Translation;
}

export const AdminTranslationCard: FC<AdminTranslationCardProps> = ({
  translation,
}) => {
  const dueDate = new Date(translation.dueDate);
  const day = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();

  return (
    <TranslationCardContainer>
      <BookingRef>Booking ref. {translation.bookingRef}</BookingRef>
      <DeleteIcon src="/assets/icons/delete.png" alt="Delete icon"></DeleteIcon>
      <DueDate>{`Due date:  ${day}/${month}/${year}`}</DueDate>
      <FlagAndButtonContainer translationStatus={translation.status}>
        <PendingStatusFlag translationStatus={translation.status}>
          {translation.status}
        </PendingStatusFlag>

        <DetailsLink to={`/main/details/${translation._id}`}>
          Details
        </DetailsLink>
      </FlagAndButtonContainer>
    </TranslationCardContainer>
  );
};
