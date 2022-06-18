import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
import data from "../../data/users.json";
import SearchResults from "./components/SearchResults";

export default function Search(){
    const[isATop, setIsAtTop] = useState(false);//bool que evalua para subir la barra
    //const[userData,setUserData] = useState(data);
    const[results,setResults] = useState([]);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    };
    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(data?.length){
            const searchTxtMinus = searchText.toLowerCase();
            const filteredData = data.filter((value)=>(
                value.name.toLowerCase().includes(searchTxtMinus)     ||
                value.email.toLowerCase().includes(searchTxtMinus)    ||
                value.username.toLowerCase().includes(searchTxtMinus) ||
                value.phone.includes(searchText)    
            ));
            setResults(filteredData);
            console.log(results);
        }
    };

    return(
        <div className={`search ${isATop? "search--top": "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} 
            isSearching={isATop}/>
            
            <SearchResults results={results} isSearching={isATop}/>
        </div>
    )
    
}