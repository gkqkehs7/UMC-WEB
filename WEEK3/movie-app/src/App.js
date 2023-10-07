import { movies } from './movie';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="movie-conatiner">
        {
          movies.results.map((movie) => {
            return (
                <div className="movie-box">
                  {/* 화면 hover시에 영화 설명 부분 */}
                  <div className="movie-overview">
                    <p>{movie.title}</p>
                    <p>{movie.overview}</p>
                  </div>

                  {/* 이미지 부분 */}
                  <div className="movie-image-container">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                  </div>

                  {/* 제목, 평점 부분 */}
                  <div className="movie-text">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
