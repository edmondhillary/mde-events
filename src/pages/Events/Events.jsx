import CarouselData from "../../components/Carousel/CarouselData";
import EventCard from "../../components/Card/Card";
import { useTranslation } from 'react-i18next';
import "./Events.css";

function Events() {
  const { t } = useTranslation();
  return (
    <div className='container center'>
      <br />
      <h1 className='title'>{ t('events.eventDet') }</h1>
      <br />
      <div className='row'>
        {CarouselData?.map((event) => (
          <div key={event.id} className='col-12 col-md-4'>
            <EventCard event={event}></EventCard>
            <br />
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default Events;
