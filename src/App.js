import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Additional from "./Additional/Additional";
import Contacts from "./Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Additional/>
            <Contacts/>
        </div>
    );
}

export default App;
