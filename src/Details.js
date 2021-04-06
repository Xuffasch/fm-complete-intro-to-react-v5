import React, { lazy } from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import { navigate } from '@reach/router';
// import Modal from './Modal';

const Modal = lazy(() => import('./Modal'));
class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    // Comment this error after Error Boundary component testing
    // throw new Error('lol');
    pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city} - ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        })
    }, console.error)
  }
  
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }

    const { animal, breed, location, description, name, media, showModal } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button onClick={this.toggleModal} style={{ backgroundColor: theme.adoptColor }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {
            showModal ?
            (<Modal>
              <div>Would you like to adopt {name}</div>
              <div className='buttons'>
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I am a Monster !</button>
              </div>
            </Modal>)
            : null
          }
        </div>
      </div>
    )
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      {/* The same as writing */}
      {/* <Details id={props.id} name={} ... /> */}
      <Details {...props} />
    </ErrorBoundary>
  )
};