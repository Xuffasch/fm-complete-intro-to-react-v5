import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  media: Photo[]
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component<IProps, IState> {
  public state = { photos: [], active: 0 };

  public static getDerivedStateFromProps({ media } : IProps) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large)
    }

    return { photos };
  }

  // Use Arrow function so that this is correct when it is called, which should be the Carousel context
  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    // Narrow the type of the event target to be sure it is an HTML element and have dataset attribute available
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      })
    }
  } 

  public render() {
    const { photos, active } = this.state

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;