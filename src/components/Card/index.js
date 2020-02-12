import React from 'react';
import { ImageUrl } from '../../API';
import '../../styles/app.css'
function Card(props) {

  let { actor, key, image, movieId, movieName, characterName } = props
  const PosterSize = "w154";

  if (actor) {
      return (
          <div key={key} lg={6} md={8} xs={24}>
              <div style={{ position: 'relative' }}>
                  <img className='column' alt={characterName} src={`${ImageUrl}${PosterSize}${image}`} />
              </div>
          </div>
      )
  } else {
      return (
          <div key={key} lg={6} md={8} xs={24}>
              <div style={{ position: 'relative' }}>
                  <a href={`/movie/${movieId}`} >
                      <img style={{ width: '60%', height: '320px' }} alt={movieName} src={image} />
                  </a>
              </div>
          </div>
      )
  }

}

export default Card;
