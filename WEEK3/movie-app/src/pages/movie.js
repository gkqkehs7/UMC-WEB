import styled from 'styled-components';
import { movies } from '../movieApi';

const App = styled.div`
  background-color: 'white';
  padding: 20px 20px;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
`;

const MovieBox = styled.div`
  background-color: #3A487F;
  position: relative;

  &:hover .movie-image-container {
    filter: brightness(0.3);
  }
`;

const MovieOverview = styled.div`
  position: absolute;
  display: none;
  color: white;
  top: 20;
  left: 20;
  z-index: 999;
  padding: 20px 20px;

  ${MovieBox}:hover & {
    display: block;
  }
`;

const MovieImageContainer = styled.div`
  max-width: 100%;
  height: auto;
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const MovieText = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0 20px;
`;

const MovieTextParagraph = styled.p`
  font-weight: 600;
`;

const MovieOverviewText = styled.p`
    font-size: small;
`

function Movie() {
  return (
    <App>
      <MovieContainer>
        {movies.results.map((movie) => (
          <MovieBox key={movie.id}>
            <MovieOverview>
              <MovieOverviewText>{movie.overview}</MovieOverviewText>
            </MovieOverview>
            <MovieImageContainer>
              <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            </MovieImageContainer>
            <MovieText>
              <p>{movie.title}</p>
              <MovieTextParagraph>{movie.timeline}</MovieTextParagraph>
              <MovieTextParagraph>{movie.vote_average}</MovieTextParagraph>
            </MovieText>
          </MovieBox>
        ))}
      </MovieContainer>
    </App>
  );
}

export default Movie;
