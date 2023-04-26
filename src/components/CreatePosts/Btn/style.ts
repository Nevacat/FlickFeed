import styled from "styled-components";

export const Btn = styled.button`
  width:100px;
  height:36px;
  background-color: ${({ theme }) => theme.color.lightPurple};
  border:none;
  border-radius:4px;
  position:absolute;
  left:0;
  right:0;
  margin: 0 auto;
  margin-top:20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.16);
  color:${({theme})=>theme.color.white};
  font-weight: ${({theme})=>theme.fontWeight.bold};
`