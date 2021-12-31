import s from "./App.module.scss"
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Additional from "./Additional/Additional";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Additional/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
