import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from '../apis/movieApi';
import queryKey from '../consts/queryKey';

const usePopularMovieQuery = () => {
    const { data, fetchNextPage } = useInfiniteQuery(
        [queryKey.POPULAR_MOVIE_LIST], // 쿼리키
        ({ pageParam = 1 }) => MovieApi.getNowPlayingMovies({ params: { page: pageParam } }), // 콜백함수
        {
            // 다음 요청 시, 페이지 + 1
            getNextPageParam: (lastPage) => {
                return lastPage.data.page + 1;
            },
            onError: (err) => {
                console.error(err);
            },
        }
    );
    return { data, fetchNextPage };
};

export default usePopularMovieQuery;
