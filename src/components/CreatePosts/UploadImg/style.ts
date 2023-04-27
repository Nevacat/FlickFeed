import styled, { css } from 'styled-components';
import { BsFillImageFill } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';

interface IProps {
  backgroundImage: string;
}

export const Box = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  overflow: hidden;
`;

export const Preview = styled.div<IProps>`
  height: 220px;
  overflow: hidden;
  background-color: inherit;
  background-position: center center;
  background-repeat: no-repeat;
  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: url(${props.backgroundImage});
    `};
  background-size: 100%;
  position: relative;
`;

export const ImgIcon = styled(BsFillImageFill)`
  font-size: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 0;
  color: rgba(155, 121, 187, 0.7);
  display: ${(props) => props.display};
`;

export const UploadOption = styled.div`
  background-color: ${({ theme }) => theme.color.lightPurple};
  height: 60px;
  position: relative;
  cursor: pointer;
`;

export const AddIcon = styled(GrAdd)`
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  filter: invert(100%) sepia(0%) saturate(7483%) hue-rotate(91deg) brightness(99%) contrast(104%);
`;

export const Input = styled.input`
  opacity: 0;
  display: none;
`;
