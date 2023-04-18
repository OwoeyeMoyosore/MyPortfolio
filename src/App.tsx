
import { Box, Toolbar } from '@mui/material';
import './App.css';
import { Greet,Person, PersonList } from './components/Greet';
import Navbar from './components/Navbar';
import AboutMe from './components/contents/AboutMe';


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
      <Navbar />
      <Box component="main" sx={{  width: "100%"}}>
        <Toolbar />
        <AboutMe name="<Moyosore Owoeye />" role='Front-end Developer / UI Designer'/>
      </Box>
      {/* <AboutMe /> */}
      <Greet name="Moyosore" location='Lagos State' age={29} isLoggedIn={true} />
      <Person name={personName}/>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
