import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";
function App() {
  return (
    <div >
     Hallo Hw_25_1
     <Button text ={"Privet"}/>
     <Header text ={"Заголовок"}/>
     <Header text ={"NPM RUN"}/>
     <Image imageUrl = "/Users/anatolykarpovMAC15/Desktop/FrontEnd/homework_25_1/app/src/media/Cleopatra_-_Michelangelo.png"/>
     <Student firstName="Гойко" lastName="Митич" grades={[5, 4, 3, 5]} />
    </div>
  );
}

export default App;
