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
  leftPositioning,
  topPosition,
}) => {
  return (
    <Image.Wrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      position={position}
      topPosition={topPosition}
      leftPositioning={leftPositioning}
    >
      <Image.Item src={imageLink} alt={imageName} imageWidth={imageWidth} />;
    </Image.Wrapper>
  );
};

Image.Wrapper = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) =>
    props.height ? convertFromPixelsToRem(props.height) : '100%'};
  border-radius: ${(props) =>
    props.borderRadius ? convertFromPixelsToRem(props.borderRadius) : 0};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.topPosition || '-20px'};
  left: ${(props) => props.leftPositioning || '-10px'};
  z-index: 9;
`;
Image.Item = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default Image;
