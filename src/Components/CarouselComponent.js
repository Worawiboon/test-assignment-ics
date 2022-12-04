import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = ({images}) => {
    return (
        <Carousel>
            {images.map((image,index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block image-food-mb" 
                        src={image}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))} 
        </Carousel>
    )
}

export default CarouselComponent;