import styled, { css } from 'styled-components';

export const UserImg = styled.div`
  ${({ size }: any) =>
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
  /* background-image: url('https://i.pinimg.com/550x/54/5a/fd/545afdd31eecb1f66808af763874afb5.jpg'); */
`;
