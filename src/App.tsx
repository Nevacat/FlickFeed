import axios from 'axios';
import { useEffect } from 'react';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './styles/globalStyle';
import Routers from './routes/routes';

function App() {
  // const testPost = async () => {
  //   const result = await axios.post('/auth/login',{
  //     email:"test@naver.com",
  //     password:"test1234"
  //   });
  //   console.log({ result: result.data });
  // };

  // useEffect(() => {
  //   testPost();
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Routers />
    </ThemeProvider>
  )
}

export default App;
