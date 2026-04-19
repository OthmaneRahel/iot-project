import { useState } from 'react';
import mqtt from 'mqtt';


function App() {
  const [dataCapteur, setDataCapteur] = useState([]);
   console.log(dataCapteur);

  const mqttp = mqtt.connect('wss://a24d3616ca0742ebb8394584bf1d7bdb.s1.eu.hivemq.cloud:8884/mqtt',{
    username: "OthmaneRahel",
    password: "Iloveyoumama123##"
  });

  mqttp.on('connect', () => {
    console.log('Connected to MQTT broker');
    mqttp.subscribe('value/#', (err) => {
      if (err) {
        console.error('Failed to subscribe to topic:', err);
      } else {
        console.log('Subscribed to topic: value/#');
      }
    });

    mqttp.publish('value/led_on_off', '25.5', { qos: 0 });
  });

  mqttp.on('message', (topic, message) => {
    console.log('Received message:', topic, message.toString());
    console.log(message.toString());
  });

 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
