import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';

const ContentWrapper = ({
  children,
  width,
  height,
  display,
  flexWrap,
  marginTopAndDown,
  marginRightAndLeft,
}) => {
  return (
    <ContentWrapper.Wrapper
      width={width}
      height={height}
      display={display}
      flexWrap={flexWrap}
      marginTopAndDown={marginTopAndDown}
      marginRightAndLeft={marginRightAndLeft}
    >
      {children}
    </ContentWrapper.Wrapper>
  );
};

ContentWrapper.Wrapper = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  display: ${(props) => props.display || 'flex'};
  flex-wrap: ${(props) => props.flexWrap || 'no-wrap'};
  padding: ${(props) =>
      props.marginTopAndDown
        ? convertFromPixelsToRem(props.marginTopAndDown)
        : 0}
    ${(props) =>
      props.marginRightAndLeft
        ? convertFromPixelsToRem(props.marginRightAndLeft)
        : 0};
`;
export default ContentWrapper;
