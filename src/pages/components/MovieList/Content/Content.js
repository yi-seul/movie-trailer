import React, { useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from '../../../../components/Card/Card';
import usePopularMovieQuery from '../../../../queries/usePopularMovieQuery';
import { useInView } from 'react-intersection-observer';

function MovieListContent() {
    const { data: movieList, fetchNextPage } = usePopularMovieQuery();
    // console.log(movieList);

    const [ref, inView] = useInView();
    // ref = useRef의 역할(html 요소 선택)
    // inView = 감지됨에 따라 변화되는 옵션 값

    // react-query 사용
    useEffect(() => {
        // console.log(inView); -> 마지막 요소가 감지되면 true가 됨
        if (!inView) return;
        fetchNextPage();
    }, [inView, fetchNextPage]);

    // react-query 사용하지 않았을 때
    /*
        const [page, setPage] = useState(1);

        useEffect(() => {
            if(!inView) return;
            setPage((prev) => prev + 1)
        }, [inView])

        useEffect(() => {
            MovieApi.getPopularMovieList({params: {page}})
        }, [page])
    */

    return (
        <S.Wrapper>
            <S.Container>
                {movieList &&
                    movieList.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.data.results.map((movie, index) => (
                                <MovieCard movie={movie} key={index} />
                            ))}
                        </React.Fragment>
                    ))}
                <div ref={ref} />
            </S.Container>
        </S.Wrapper>
    );
}
export default MovieListContent;

const Wrapper = styled.div`
    min-height: 100vh;
    width: calc(100% - 340px);
    display: flex;
    justify-content: center;
    padding: 0 64px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const S = {
    Wrapper,
    Container,
};
