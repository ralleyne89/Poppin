import React, {useEffect, useState, useRef} from 'react';
import {APIKey, APIUrl, ImageUrl, ImageSize, PosterSize} from '../API';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import MainImage from '../components/MainImage';

function LandingPage() {
  const buttonRef = useRef(null);

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    const endScroll = `${APIUrl}movie/popular?api_key=${APIKey}&language=en-US&page=1`;
    fetchMovies(endScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const fetchMovies = endScroll => {
    fetch(endScroll)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        setMovies([...Movies, ...result.results]);
        setMainMovieImage(MainMovieImage || result.results[0]);
        setCurrentPage(result.page);
      }, setLoading(false))
      .catch(err => console.error('Error:', err));
  };

  const loadItems = () => {
    let endScroll = '';
    setLoading(true);
    console.log('CurrentPage', CurrentPage);
    endScroll = `${APIUrl}movie/popular?api_key=${APIKey}&language=en-US&page=${CurrentPage +
      1}`;
    fetchMovies(endScroll);
  };

  const handleScroll = () => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 1) {
      console.log('clicked');
      buttonRef.current.click();
    }
  };

  return (
    <>
      {MainMovieImage && (
        <MainImage
          image={`${ImageUrl}${ImageSize}${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title}
          text={MainMovieImage.overview}
        />
      )}

      <Carousel />
      {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <Card
                                image={movie.poster_path ?
                                    `${ImageUrl}${PosterSize}${movie.poster_path}`
                                    : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
    </>
  );
}

export default LandingPage;
