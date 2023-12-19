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

/* export class ImageGallery extends Component{
  state = {
    showModal: false,
    el: null,
  }

  openModal = (option) => {
    this.setState(({ el }) => ({ el: option }))
    this.setState({showModal:true})
  }
  closeModal = () => {
    this.setState({showModal:false})
  }

  render() {
    const { showModal } = this.state

    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem options={this.props.hits} onClickModal={this.openModal } />

        {showModal && <Modal item={this.state.el} onCloseModal={this.closeModal } />}
      </ul>
    )
  }
} */