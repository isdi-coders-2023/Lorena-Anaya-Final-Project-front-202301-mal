import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TranslationStatusProps {
  translationStatus: 'Pending' | 'Completed' | string;
}

export const TranslationCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 10px;
  width: 19rem;
  height: 11rem;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
`;

export const BookingRef = styled.p`
  font-family: 'SourceCodePro-Medium', sans-serif;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const DueDate = styled.p`
  font-family: 'SourceCodePro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #666666;
`;

export const PendingStatusFlag = styled.div<TranslationStatusProps>`
  padding: 8px;
  gap: 10px;
  border-radius: 100px;
  font-family: 'SourceCodePro-Regular', sans-serif;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: #3c3c43;

  background-color: ${props => {
    if (props.translationStatus === 'Pending') {
      return '#FF993C';
    } else {
      return '#9ED299';
    }
  }};
`;

export const FlagAndButtonContainer = styled.article<TranslationStatusProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 1rem;
  gap: ${props => {
    if (props.translationStatus === 'Pending') {
      return '5rem';
    } else {
      return '4rem';
    }
  }};
`;

export const DetailsLink = styled(Link)`
  padding: 8px;
  background: #00a2a1;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: none;
  font-family: 'SourceCodePro-Regular', sans-serif;
  font-size: 0.9rem;
  border: 2px solid #00a2a1;
  text-decoration: none;
  color: #ffffff;
  :hover {
    cursor: pointer;
    color: #00a2a1;
    background: #fafaff;
    font-family: 'SourceCodePro-Bold', sans-serif;
  }
`;
