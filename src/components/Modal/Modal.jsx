
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
