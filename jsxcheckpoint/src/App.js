import { Card,} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Component/Name';
import Description from './Component/Description';
import Price from './Component/Price';
import Image from './Component/Image';
import Hello from './Component/Hello';



function App() {
  const firstName ="Kods"
  return (
    <div className="App">
    <Card style={{margin:'10%',	background: 'rgba(218, 184, 239, 0.251)',	color: 'beige'}}>
    <Card.Header><Image/></Card.Header>
        <Card.Body>
        <Card.Title> <Name /> </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
        </Card.Body>
         <Card.Footer className="text-muted"> <Price /> </Card.Footer>

      </Card>
        

        <div className='hello'>  <Hello firstName={firstName}/> 
</div>
      </div>  
  );
}

export default App;
