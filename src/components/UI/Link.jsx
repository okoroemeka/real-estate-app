import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';

const Anchor = ({ children, ref }) => {
  return <Anchor.Link>{children}</Anchor.Link>;
};

Anchor.Link = styled.span`
  color: white;
  font-weight: 550;
  font-size: ${convertFromPixelsToRem(16)};
  :hover {
    cursor: pointer;
  }
`;
export default Anchor;
