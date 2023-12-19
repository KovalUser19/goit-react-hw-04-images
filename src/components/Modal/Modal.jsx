
import {useEffect, useCallback } from 'react';
import css from './Modal.module.css'

export const Modal = (props) => {

  const handleKeydown = useCallback(e => {
    if (e.code === 'Escape') {
      props.onCloseModal();
    }
  },[props]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      props.onCloseModal();
    }
  };

   const handleClick = (e) => {
    handleBackdropClick(e);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return (

    <div className={css.overlay} onClick={handleClick}
>
        <div className={css.modal}>
          <img src={props.item.largeImageURL} alt={props.item.tag} />
        </div>
      </div>
    )
}

/* export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

   handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      this.props.onCloseModal();
    }
  };
  render() {
    return (

      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.item.largeImageURL} alt={this.props.item.tag} />
        </div>
      </div>
    )
  }
} */
