
import './App.css';
import { Greet,Person, PersonList } from './components/Greet';


function App() {
  const personName = {
    first: 'Owoeye',
    last: 'Moyosore'
  }

  const nameList = [
    {
      title: "Miss",
      name: "Moyosore"
    },
    {
      title: "Mr",
      name: "Ayomikun"
    },
    {
      title: "Miss",
      name: "Toyosi"
    },
    {
      title: "Mr",
      name: "Ayomide"
    }
  ]
  return (
    <div className="App">
      <Greet name="Moyosore" location='Lagos State' age={29} isLoggedIn={true} />
      <Person name={personName}/>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
