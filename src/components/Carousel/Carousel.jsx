import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

import CarouselData from './CarouselData';

function CarouselEvents() {
  const { t } = useTranslation();

  return (
    <Carousel fade indicatorLabels>
      {CarouselData?.map((event) => (
        <Carousel.Item key={event.id}>
          <img
            src={event.imgUrl}
            alt={event.title}
            style={{ objectFit: 'cover', width: '100%', height: '90vh', maxHeight: '100%' }}
          />
          <Carousel.Caption>
            <h3 style={{ fontSize:'50px', fontWeight:'bold' }}>{event.title}</h3>
            <p style={{ fontSize:'20px' }}>{event.description}
            <br/>
            <br/>
            <Button size='lg' style={{backgroundColor:'var(--primaryColor)', borderColor:'var(--primaryColor)'}}>{ t('carousel.button') }</Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselEvents;
