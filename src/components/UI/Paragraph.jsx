import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';

const Paragraph = ({ color, fontSize, fontWeight, children, paddingRight }) => {
  return (
    <Paragraph.Wrapper
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      paddingRight={paddingRight}
    >
      {children}
    </Paragraph.Wrapper>
  );
};

Paragraph.Wrapper = styled.p`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) =>
    props.fontSize ? convertFromPixelsToRem(props.fontSize) : `${1}rem`};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  padding-right: ${(props) =>
    props.paddingRight ? convertFromPixelsToRem(props.paddingRight) : 0};
  margin-bottom: 3rem;
`;
export default Paragraph;
