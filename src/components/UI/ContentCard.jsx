import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';

const ContentCard = ({
  width,
  height,
  children,
  borderRadius,
  backgroundColor,
  padding,
}) => {
  return (
    <ContentCard.Wrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      {children}
    </ContentCard.Wrapper>
  );
};
ContentCard.Wrapper = styled.div`
  width: ${(props) => props.width || '50%'};
  height: ${(props) => props.height || 'auto'};
  position: relative;
  background: ${(props) => props.backgroundColor || 'white'};
  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? convertFromPixelsToRem(props.borderRadius) : 0};
  padding: ${(props) =>
    props.padding ? convertFromPixelsToRem(props.padding) : 0};
`;
export default ContentCard;
