// import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
export default function Slider(props) {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState('');

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 999,
            textAlign: "center",
            height: "80%"
        },
    };


    const openModal = (image) => {
        setSelectedImage(image)
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    if (props.images.length < 1) return (<div style={{ height: 350 }}></div>)
    else
        return (
            <>
                <Carousel className='sliderContent' showArrows={true} showStatus={false} emulateTouch showThumbs={false} autoPlay={true} transitionTime={2000} interval={8000} infiniteLoop={true} onClickItem={(index) => { openModal(props.images[index]) }}>
                    {props.images.map((item, index) => {
                        return (
                            <span key={index}>
                                <a href={item} target="_blank"><img key={index} className='images_slider' src={item} /></a>
                            </span>
                        )
                    })
                    }
                </Carousel>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    overlayClassName="Overlay"
                >
                    <img src={selectedImage} height="100%" />
                </Modal>
            </>
        );
}