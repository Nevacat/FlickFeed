import styled from "styled-components"

export const Layout = styled.div`
  box-sizing:border-box;
  background-color:${({theme})=>theme.color.white};
  width: 375px;
  height: 667px;
  padding: 20px 15px 0; 
  position:absolute;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border-radius: 40.9px;
  color: ${({theme})=>theme.color.navy};
`