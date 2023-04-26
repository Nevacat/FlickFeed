import axios from 'axios';
import { useEffect, createContext, useState } from 'react';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './styles/globalStyle';
import Routers from './routes/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import FeedProvider from './context/FeedContext';
export const ModalContext = createContext(null);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FeedProvider>
          <GlobalStyled />
          <Routers />
        </FeedProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
