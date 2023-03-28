import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { NotFoundPage } from '../../../../pages/error-pages/404Page/404Page';

import { Translation } from '../../../../shared/models/translation-model';
import { deleteTranslationByIdAsync } from '../../translations-slice';
import {
  BookingRef,
  DetailsLink,
  DueDate,
  FlagAndButtonContainer,
  PendingStatusFlag,
  TranslationCardContainer,
} from '../TranslationCardStyled';
import {
  CardTopContainer,
  DeleteButton,
  DeleteIcon,
} from './AdminTranslationCardStyled';

interface AdminTranslationCardProps {
  translation: Translation;
}

export const AdminTranslationCard: FC<AdminTranslationCardProps> = ({
  translation,
}) => {
  const dispatch = useAppDispatch();

  const dueDate = new Date(translation.dueDate);
  const day = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();

  return (
    <TranslationCardContainer>
      <CardTopContainer>
        <BookingRef role="paragraph">
          Booking ref. {translation.bookingRef}
        </BookingRef>
        <DeleteButton
          onClick={() => {
            dispatch(deleteTranslationByIdAsync(translation._id));
          }}
          data-testid="end-button"
        >
          <DeleteIcon
            src="/assets/icons/delete.png"
            alt="Delete icon"
          ></DeleteIcon>
        </DeleteButton>
      </CardTopContainer>
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
