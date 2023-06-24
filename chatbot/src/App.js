import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from './chatbt/ActionProvider';
import MessageParser from './chatbt/MessageParser';
import config from './chatbt/config';
//import { simpleform } from './simpleform/simpleform';
function App() {
  return (
    <div className="App">
      <div style={{maxWidth:"330px"}}>
       <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </div>
      
    </div>
  );
}

export default App;


   {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}