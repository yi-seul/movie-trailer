import styled from 'styled-components';
import MovieListContent from './Content/Content';
import MovieListSidebar from './Sidebar/Sidebar';
import MovieListTitle from './Title/Title';

function MovieList() {
    // const [movieList, setMovieList] = useState([]);

    // useEffect(() => {
    //     MovieApi.getPopluarMovies({ params: { page: 1, language: 'ko-KO' } })
    //         .then((res) => {
    //             // console.log(res.data);
    //             setMovieList(res.data.results);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }, []);

    return (
        <>
            <MovieListTitle />
            <S.Container>
                <MovieListSidebar />
                <MovieListContent />
            </S.Container>
        </>
    );
}
export default MovieList;

const Container = styled.div`
    display: flex;
`;

const S = {
    Container,
};
