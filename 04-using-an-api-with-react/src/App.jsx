import { useState } from "react";
import Searchbar from "./components/Searchbar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) =>{
        const results = await searchImages(term);
        setImages(results);
    };

    return(
        <div>
         <Searchbar onSubmit = {handleSubmit} />
         <ImageList images = {images} />
        </div>
    );
}

export default App;