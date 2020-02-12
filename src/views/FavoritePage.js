import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { ImageUrl, PosterSize } from '../API';

function FavoritePage() {
  const user = useSelector(state => state.user);

  const [Favorites, setFavorites] = useState([]);
  const [Loading, setLoading] = useState(true);
  let getUserId = {userForm: localStorage.getItem('userId')};

  useEffect(() => {
    fetchFavoriteMovie();
  }, []);

  const fetchFavoriteMovie = () => {
    axios.post('/api/favorite/getFavoriteMovie', getUserId).then(response => {
      if (response.data.success) {
        console.log(response.data.favorites);
        setFavorites(response.data.favorites);
        setLoading(false);
      } else {
        alert('Failed to get videos');
      }
    });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId: movieId,
      userFrom: userFrom,
    };
    axios.post('/api/favorite/removeFromFavorite', variables).then(response => {
      if (response.data.success) {
        fetchFavoriteMovie();
      } else {
        alert('Failed to remove favorite');
      }
    });
  };

  const renderCards = Favorites.map((favorite, index) => {
    const content = (
      <div>
        {favorite.moviePost ? (
          <img src={`${ImageUrl}${PosterSize}${favorite.moviePost}`} />
        ) : (
          'no image'
        )}
      </div>
    );

    return (
      <tr key={index}>
        <div content={content} title={`${favorite.movieTitle}`}>
          <td>{favorite.movieTitle}</td>
        </div>

        <td>{favorite.movieRunTime} mins</td>
        <td>
          <button
            onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{width: '85%', margin: '3rem auto'}}>
      <h1> Favorite Movies By Me </h1>
      <hr />
      {user.userData && !user.userData.isAuth ? (
        <div
          style={{
            width: '100%',
            fontSize: '2rem',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Please Log in first...</p>
          <a href="/login">Go to Login page</a>
        </div>
      ) : (
        !Loading && (
          <table>
            <thead>
              <tr>
                <th>Movie Title</th>
                <th>Movie RunTime</th>
                <td>Remove from favorites</td>
              </tr>
            </thead>
            <tbody>{renderCards}</tbody>
          </table>
        )
      )}
    </div>
  );
}

export default FavoritePage;
