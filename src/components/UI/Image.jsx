import React from 'react';
import styled from '@emotion/styled';
import { convertFromPixelsToRem } from '../../utils/helper';

const Image = ({
  imageLink,
  imageName,
  imageWidth,
  width,
  height,
  borderRadius,
  position,
}) => {
  return (
    <Image.Wrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      position={position}
    >
      <Image.Item src={imageLink} alt={imageName} imageWidth={imageWidth} />;
    </Image.Wrapper>
  );
};

Image.Wrapper = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => convertFromPixelsToRem(props.height) || '100%'};
  border-radius: ${(props) => convertFromPixelsToRem(props.borderRadius) || 0};
  position: ${(props) => props.position || 'relative'};
  top: -20px;
  left: -10px;
  z-index: 9;
`;
Image.Item = styled.img`
  width: ${(props) => props.imageWidth || '100%'};
  min-height: auto;
`;
export default Image;
