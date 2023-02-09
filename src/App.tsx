import './App.css';
import Guest from './components/Guest';
import Name from './components/Name';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    firstName: 'Mahbub',
    lastName: 'Noyon'
  }
  const persons = [
    {
      first: 'John',
      last: 'Wick'
    },
    {
      first: 'Michael',
      last: 'Clerk'
    },
    {
      first: 'Dowine',
      last: 'Johnson'
    },
  ]
  return (
    <div className="">
       <Name name='Mahbub Noyon' messages={20}></Name>
       <Guest name={personName} />
       <PersonList name={persons} />
    </div>
  );
}

export default App;
