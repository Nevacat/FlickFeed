import styled from 'styled-components';
import theme from '../../styles/theme';

const width = '240px';
const height = '15px';
const margin = '12px auto 0';
const borderRadius = '20px';
const padding = '10px 10px';
const display = 'block';
const border = '1px solid navy';
const color = theme.color.navy;

export const ContainerStyle = styled.form`
  border-radius: 40.9px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
export const EmailStyle = styled.input`
  width: ${width};
  height: ${height};
  margin: ${margin};
  border-radius: ${borderRadius};
  padding: ${padding};
  display: ${display};
  margin-top: 60px;
  border: ${border};
`;
export const PwStyle = styled.input`
  width: ${width};
  height: ${height};
  margin: ${margin};
  border-radius: ${borderRadius};
  padding: ${padding};
  display: ${display};
  border: ${border};
`;
export const LoginStyle = styled.button`
  width: 263.2px;
  height: 38.2px;
  margin: ${margin};
  border-radius: ${borderRadius};
  padding: ${padding};
  display: ${display};
  background-color: ${theme.color.purple};
  color: black;
  border:none;
`;

export const Signin = styled.h1`
  font-size: 28px;
  color: ${theme.color.purple};
  font-weight: bold;
  text-align: center;
  margin: 120px auto 0;
`;

export const First = styled.span`
  color: ${theme.color.black};
  font-size: ${theme.fontSize.large};
  margin-top: 20px;
  margin-left: 120px;
  display: block;
`;

export const Neww = styled.span`
  color: ${theme.color.purple};
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
  font-size: ${theme.fontSize.large};
  display: block;
`;

export const ImgStyle = styled.img`
  width: 105px;
  height: 95px;
  margin: 50px auto;
  display: block;
`;
