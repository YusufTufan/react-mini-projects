import axios from "axios";

const searchImages = async (term) =>{
   const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID _JbLpLLyeJZjZrnZZ6Tu7KB45o4NUR8Eiyk4NJ1Q2Bs"
        },
        params:{
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;