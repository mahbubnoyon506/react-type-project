import './App.css';
import Guest from './components/Guest';
import Header from './components/Header';
import Name from './components/Name';
import Oscar from './components/Oscar';
import PersonList from './components/PersonList';
// import Status from './components/Status';


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
      <Name name='Mahbub Noyon' messages={20} isLoggedIn={true}></Name>
      <Guest name={personName} />
      <PersonList name={persons} />
      {/* <Status status='success' /> */}
      <Header> This is header </Header>
      <Oscar>
        <Header>Oscar goes to Lionardo</Header>
      </Oscar>
    </div>
  );
}

export default App;
