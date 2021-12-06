import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Form,Container,Row,Col } from 'react-bootstrap';

function App() {
  return (
    
    <div class="container mt-5 center">
    <Container className="App">
    <Row className="my-5">
      <Col>
      <h1>Form Elementi</h1>
      </Col>
  <Row  className="my-5">
  <Col> 
    <Form.Control type="email" placeholder="Lütfen Eposta Adresi Giriniz" />
    </Col>
    </Row>
    <Row  className="my-5">
    <Col> 
    <Form.Control type="password" placeholder="Lütfen Sifrenizi Giriniz" />
    </Col>
    <Row  className="my-5" >
    <Col>
    <Form.Check type="checkbox" label="Sifremi unuttum" />
    </Col>
    
    
    <div class="col col-lg-2">
    <Button variant="primary" type="submit">
    Gonder
  </Button>
    </div>
    
    
 
  </Row>
</Row>
</Row>
</Container>
</div>

  );
}

export default App;
