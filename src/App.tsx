import './App.css';
import Button from './components/Button';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import User from './components/context/User';
import { UserContext, UserContextProvider } from './components/context/UserContext';
import Counter from './components/Counter';
import Guest from './components/Guest';
import Header from './components/Header';
import Input from './components/Input';
import Name from './components/Name';
import Oscar from './components/Oscar';
import PersonList from './components/PersonList';
import LoginState from './components/state/LoginState';
// import User from './components/state/User';
import Status from './components/Status';
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
      <Status status='success' />
      <Header> This is header </Header>
      <Oscar>
        <Header>Oscar goes to Lionardo</Header>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Clicked', event, id)
      }} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <LoginState />
      {/* <User /> */}
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
