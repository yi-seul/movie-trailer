import { ThemeProvider } from 'styled-components';
import LayoutHeader from './components/Layout/header/Header';
import HomePage from './pages/Home';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
    /*     Axios.get('/movie/popular', {
        params: {
            language: 'ko-KO',
            page: 2,
        },
    }).then((res) => {
        console.log(res);
    }); */
    // movie/popular?laungage=ko-KO&page=2

    const qureyClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 60 * 24,
                cacheTime: 1000 * 60 * 5,
            },
        },
    });

    return (
        <QueryClientProvider client={qureyClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <LayoutHeader />
                <HomePage />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
