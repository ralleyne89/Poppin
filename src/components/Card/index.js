import React from 'react';
import {ImageUrl} from '../../API';
import '../../styles/app.css';

function Card(props) {
  let {actor, key, image, movieId, movieName, characterName} = props;
  const PosterSize = 'w154';

  if (actor) {
    return (
      <div className="grid gap-4 grid-cols-3" key={key} lg={6} md={8} xs={24}>
      
        <div className=''>
          <img

            alt={characterName}
            src={`${ImageUrl}${PosterSize}${image}`}
          />
        </div>
      

      </div>
    );
  } else {
    return (
      <div className='grid gap-4 grid-cols-3 m-4' key={key} lg={6} md={8} xs={24}>
        
          <a href={`/movie/${movieId}`}>
            <img
              
              alt={movieName}
              src={image}
            />
          </a>
        
      </div>
    );
  }
}

export default Card;
