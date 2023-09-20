import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Card/Card';

function EventsGrid() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
        <Card></Card>
        </Col>
        <Col xs={12} md={3}>
        <Card></Card>
        </Col>
        <Col xs={12} md={3}>
        <Card></Card>
        </Col>
        <Col xs={12} md={3}>
        <Card></Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EventsGrid;