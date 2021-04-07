import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Photo[];
  location: string;
  id: number;
}

const Pet: FunctionComponent<IProps> = (props) => {
  const { name, animal, breed, media, location, id } = props;
  
  let hero = 'http://placecorgi.com/300/300';
  if (media.length) {
    hero = media[0].small
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{ name }</h1>
        <h1>{`${animal} - ${breed} - ${location}`}</h1>
      </div>
    </Link>
  )
};

export default Pet;
