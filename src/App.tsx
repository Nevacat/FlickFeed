import axios from 'axios';
import { useEffect } from 'react';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './styles/globalStyle';
import Routers from './routes/routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Routers />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
