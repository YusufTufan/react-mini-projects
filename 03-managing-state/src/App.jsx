import './App.css';
import {useState} from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal(){
    const animals = ["Bird", "Cat", "Cow", "Dog", "Gator", "Horse"];
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
}

function App(){
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return(
    <div className='App'>
        <button onClick={handleClick}>Add Animal</button>
        <div className = "animal-list">{renderedAnimals}</div>
    </div>
    );
}

export default App;