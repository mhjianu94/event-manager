import './App.css';
import { 
  MyStateProvider 
} from './state/State.js';

import {
  Navbar,
  UserForm,
  Header,
  MainContainer,
  Footer,
  EventForm,
  BingMaps,
  UserList
} from "./components/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyStateProvider>
        <Navbar/>
        <MainContainer
          header={<Header/>}
          userForm={<UserForm/>}
          eventForm={<EventForm/>}
          bingMaps={<BingMaps bingMapsKey={"AuGE3UFdOs8I9xH6QXcFSYzYXRFShV7emQl9dxPetYPnadC-9hCaOTAwsSSku1w_"}/>}
          userList={<UserList/>}
        >
        </MainContainer>
        <Footer/>
        </MyStateProvider>
    </div>
  );
}

export default App;
