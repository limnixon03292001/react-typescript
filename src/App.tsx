import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Counter from './components/reducer/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Status from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import User1 from './components/context/Future-values/User1';
import { UserContextProvider } from './components/context/Future-values/UserContext';
import Private from './components/componentAsProps/Private';
import Profile from './components/componentAsProps/Profile';
import ArrayList from './components/generics/ArrayList';
import RandomNumbers from './components/restrictions/RandomNumbers';
import Toast from './components/templateLiterals/Toast';
import CustomButton from './components/wrappingElements/CustomButton';
import CustomInput from './components/wrappingElements/CustomInput';
import CustomeComponent from './components/ExtractingProps/CustomeComponent';


function App() {
  const personName = {
    firstName: 'Nixon',
    lastName: 'Lim'
  };

  const nameList = [
    {
      firstName: 'Miku',
      lastName: 'Nakano'
    },
    {
      firstName: 'Nixon',
      lastName: 'Lim'
    },
    {
      firstName: 'Nino',
      lastName: 'Nakano'
    },
  ];

  return (
    
      <div className="App">
        <ThemeContextProvider>
          <Greet name="Nixon" isLoggedIn={true}/>
          <Person fullName={personName}/>
          <PersonList nameList={nameList} />
          <Status status='loading'/>
          <Heading> Placeholder Text </Heading>
          <Oscar>
            <Heading>Oscar goes to Nixon Lim!!!</Heading>
          </Oscar>
          <Button handleClick={(event,id) => {
            console.log('Button Clicked', event, id)
          }}/>
          <Input value="haha" handleChange={(event) => {
            console.log(event);
          }}/>
          <Container styles={{color: 'blue'}}/>
          <LoggedIn/>
          <User/>
          <Counter/>
          <Box/>
        </ThemeContextProvider>
        <UserContextProvider>
          <User1/>
        </UserContextProvider>
        <Private isLogin={true} component={Profile} />
        <ArrayList arr={["Miku", "Nino", "Yotsuba"]} onClick={(item) => console.log(item)}/>
        <ArrayList arr={[1,2,3]} onClick={(item) => console.log(item)}/>
        <ArrayList arr={[
          {fn: "Miku",ln: "Nakano"},
          {fn: "Miku", ln: "Nakano"},
          {fn: "Miku", ln: "Nakano"},]} 
          onClick={(item) => console.log(item)}/>
        <RandomNumbers value={20} isPositive />
        <Toast position='top-left'/>
        <CustomButton variant='primary' onClick={() => console.log("Primary Button Clicked!")} >
          Primary Button
        </CustomButton>
        <CustomInput/>
        <CustomeComponent name='nixon' isLoggedIn/>
      </div>
   
  );
}

export default App;
