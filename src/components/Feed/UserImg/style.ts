import styled, { css } from 'styled-components';
import { UserImgProps } from '.';

export const UserImg = styled.div<UserImgProps>`
  ${({ size }) =>
    size === 'small'
      ? css`
          width: 40px;
          height: 40px;
        `
      : css`
          width: 50px;
          height: 50px;
        `}
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${({ url }) =>
    url
      ? css`
          background-image: url(${url});
        `
      : css``}
`;
