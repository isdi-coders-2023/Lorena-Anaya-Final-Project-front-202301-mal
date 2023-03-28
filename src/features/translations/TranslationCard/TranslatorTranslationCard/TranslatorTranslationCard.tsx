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
      <BookingRef role="paragraph">
        Booking ref. {translation.bookingRef}
      </BookingRef>
      <DueDate role="paragraph">{`Due date:  ${day}/${month}/${year}`}</DueDate>
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
