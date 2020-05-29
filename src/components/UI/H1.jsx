import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';

const H1Tag = ({
  color,
  fontSize,
  fontWeight,
  children,
  textTransform,
  marginBottom,
}) => {
  return (
    <H1Tag.Wrapper
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textTransform={textTransform}
      marginBottom={marginBottom}
    >
      {children}
    </H1Tag.Wrapper>
  );
};
H1Tag.Wrapper = styled.div`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) =>
    props.fontSize ? convertFromPixelsToRem(props.fontSize) : `${1}rem`};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  text-transform: ${(props) => props.textTransform || 'normal'};
  margin-bottom: ${(props) =>
    props.marginBottom ? convertFromPixelsToRem(props.marginBottom) : 0};
`;
export default H1Tag;
