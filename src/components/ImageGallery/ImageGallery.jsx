import { Modal } from 'components/Modal/Modal'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'
import { useState } from 'react';


export const ImageGallery = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [el, setEl] = useState(null);

 const openModal = (option) => {
    setEl(option)
    setShowModal(true)
  }
 const closeModal = () => {
    setShowModal(false)
  }

  return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem options={props.hits} onClickModal={openModal } />

        {showModal && <Modal item={el} onCloseModal={closeModal } />}
      </ul>
    )
}
