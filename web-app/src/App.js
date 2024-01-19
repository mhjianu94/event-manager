import './App.css';
import {Navbar,UserForm,Header,MainContainer,Footer} from "./components/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <MainContainer
          header={<Header/>}
          userForm={<UserForm/>}
        >
        </MainContainer>
        <Footer/>
    </div>
  );
}

export default App;
