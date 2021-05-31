import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TokenSend from './components/TokenSend.js'
import Faucet from './components/Faucet.js'
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json'

import { Container, Row, Col, Card } from 'react-bootstrap'


function App() {

  const Token = FCTToken;

  return (
    <div className="App">
    <div>
    only compatible with the Goreli testnet
    <Card.Body>
    <Container>
    <Row className="justify-content-md-center">
      <Col>
      <Faucet  tokenContract={Token}/>
      </Col>
      <Col>
      <TokenSend tokenContract={Token}/>
      </Col>
    </Row>
    </Container>
    </Card.Body>
    </div>

    </div>
  );
}

export default App;
