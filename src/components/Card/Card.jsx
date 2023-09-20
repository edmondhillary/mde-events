import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

function EventCard({ event }) {
  const { t } = useTranslation();
  return (
    <Card>
      <Card.Img variant="top" src={event.imgUrl} style={{ objectFit: 'cover', width: '100%', height: '45vh', maxHeight: '100%' }} />
      <Card.Body> 
        <Card.Title>{event.title}</Card.Title>
        <Card.Text  className='overflow'>
          {event.subtitle}
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'var(--primaryColor)', borderColor:'var(--primaryColor)'}}>{ t('card.eventDet') }</Button>
      </Card.Body>
    </Card>
  );
}
export default EventCard;