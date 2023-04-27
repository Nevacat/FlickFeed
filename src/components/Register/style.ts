import styled from "styled-components"
import theme from "../../styles/theme"

const width = "240px"
const height = "15px"
const margin = "12px auto 0"
const borderRadius = "20px"
const padding = "10px 10px"
const display = "block"
const border = "1px solid navy"
const color = theme.color.navy

export const ContainerStyle = styled.form`
border-radius: 40.9px;
justify-content: center;
align-items: center;
`

export const EmailStyle = styled.input`
    width: ${width};
    height: ${height};
    margin: ${margin};
    border-radius: ${borderRadius};
    padding: ${padding};
    display: ${display};
    border: ${border};
    ::placeholder {
        color: ${color}; 
    }
`;

export const PwStyle = styled.input`
    width: ${width};
    height: ${height};
    margin: ${margin};
    border-radius: ${borderRadius};
    padding: ${padding};
    display: ${display};
    border: ${border};
    ::placeholder {
        color: ${color}; 
    }
`

export const UsernameStyle = styled.input`
width: ${width};
height: ${height};
margin: ${margin};
border-radius: ${borderRadius};
padding: ${padding};
display: ${display};
border: ${border};
::placeholder {
    color: ${color}; 
}
`

export const SignupStyle = styled.button`
    width: 263.2px;
    height: 38.2px;
    margin: ${margin};
    border-radius:${borderRadius};
    display: ${display};
    background-color: ${theme.color.purple};
    color:${theme.color.white};
    font-weight: ${theme.fontWeight.bold};
    border:none;
`

export const Signup = styled.h1`
    font-size: 28px;
    color: ${theme.color.purple};
    font-weight: bold;
    text-align: center;
    margin: 55px auto 0;
`

export const ImgStyle = styled.img`
    width: 85px;
    height: 85px;
    margin: 30px auto;
    display: block;
    border: 2px solid ${theme.color.navy};
    border-radius: 50px;
`

export const Warning = styled.p`
    text-align: center;
    margin: 20px auto 0;
    color: ${theme.color.navy};
`

export const PasswordConfirm = styled.input`
width: ${width};
height: ${height};
margin: ${margin};
border-radius: ${borderRadius};
padding: ${padding};
display: ${display};
border: ${border};
::placeholder {
    color: ${color}; 
}
`

export const FileSubmit = styled.input`
    margin-top: 5px;
    margin-left: 0px;
`
export const StatusStyle = styled.input`
    width: ${width};
    height: ${height};
    margin: ${margin};
    margin-bottom: 25px;
    border-radius: ${borderRadius};
    padding: ${padding};
    display: ${display};
    border: ${border};
    ::placeholder {
        color: ${color}; 
    }
`
export const Lab = styled.label`
    display: flex;
    margin-left: 50px;
`
export const SpanEl = styled.span`
    flex-wrap: flex;
    white-space: nowrap;
    margin-top: 9px;
    color: ${color}
`