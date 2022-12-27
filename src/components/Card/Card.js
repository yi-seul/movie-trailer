import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ReplaceImage from '../../assets/images/unknown.png';
import { flexCenter } from '../../styles/common';

function MovieCard({ movie }) {
    // console.log(movie);

    const IMAGE_URL = useRef(process.env.REACT_APP_IMAGE_URL);
    const [movieOverView, setMovieOverView] = useState('');

    useEffect(() => {
        if (!movie) return;
        if (movie.overview.length > 100) {
            setMovieOverView(movie.overview.slice(0, 100) + '...');
        } else {
            setMovieOverView(movieOverView);
        }
    }, [movie]);

    return (
        <S.Wrapper>
            <div>
                <S.Poster>
                    <img
                        src={movie.poster_path ? IMAGE_URL.current + movie.poster_path : ReplaceImage}
                        alt={'moviePoster'}
                    />
                </S.Poster>
                <S.DescBox>
                    <h1>{movie.title}</h1>
                    <div>{movie.vote_average}</div>
                    <p>{movieOverView}</p>
                </S.DescBox>
            </div>
        </S.Wrapper>
    );
}
export default MovieCard;

const Wrapper = styled.div`
    width: 340px;
    height: 610px;
    margin: 8px;
    overflow: hidden;
`;
const Poster = styled.div`
    ${flexCenter}
    & img {
        width: 260px;
        aspect-ratio: 9 / 16;
    }
`;
const DescBox = styled.div`
    width: 260px;
    margin: 0 auto;

    & h1 {
        color: #fff;
        font-size: ${({ theme }) => theme.fontSize.xLarge};
    }

    & div {
        color: yellow;
    }

    & p {
        color: #999;
    }
`;

const S = {
    Wrapper,
    Poster,
    DescBox,
};
