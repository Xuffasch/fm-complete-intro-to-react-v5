import React, {FunctionComponent, useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';

// The modal element is moved out to look the element only once.
const modalRoot = document.getElementById('modal');

const Modal: FunctionComponent = ({ children }) => {
  // useRef directly gets the div element instead of a null value so that the initial value is already typed
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    // use an early return if there is no modalRoot. Then subsequent code will have a modalRoot which type is narrowed as we know that we definitely have a non null element found for it.
    if (!modalRoot) {
      return;
    }

    modalRoot.appendChild(elRef.current);
    // Function Component is a function that's why tht return is transformed as a function
    return () => { 
      modalRoot.removeChild(elRef.current) 
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);

};

export default Modal;
