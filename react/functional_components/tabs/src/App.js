import './App.css';
import Tabs from './components/Tabs';

function App() {
  const callBackMsg = (msg) =>{
    console.log(msg);
    return (`${msg}, With Callback Function`)

  }

const tabs = [
    {label: "Tab 1", content: "Tab 1 content is showing here", callback: callBackMsg},
    {label: "Tab 2", content: "Tab 2 content is showing here", callback: callBackMsg},
    {label: "Tab 3", content: "Tab 3 content is showing here", callback: callBackMsg},
]

  return (
    <div className="App">
      <div className="container">
        <Tabs items={tabs} />
      </div>
    </div>
  );
}

export default App;
