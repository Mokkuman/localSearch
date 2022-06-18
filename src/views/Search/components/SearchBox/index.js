import { useState } from "react";
import "./style.css";

export default function SearchBox ({onSearch, onClose, isSearching}){
    const[searchText, setSearchText] = useState("");
    
    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    }
    const handleSearch = ({target: {value}}) => {
        setSearchText(value);
    };
    return (
        <div className="search-box">
            <span id="search-box-tit">Buscador de personal</span>
            <div id="search-box-form">
                <label>
                    <input type="text" value={searchText} 
                    className="search-box-input" onChange ={handleSearch}/>
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar </button>
                {isSearching && <button onClick={handleSearchClick} 
                disabled={!searchText.length}>Cerrar</button>}
            </div>
        </div>
    );
}