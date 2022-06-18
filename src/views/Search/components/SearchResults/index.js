import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}){
    return (
        <div style={{width:"97%",padding:"0.8em 0 0 0"}}>
            {!results?.length && isSearching && <p>No existen resultados</p>}
            {results?.map((value)=>{
                // return <SearchResultsItem key={value.id} name={value.name} email={value.email} />;
                return <SearchResultsItem key={value.id} {...value}/>;
                //otra forma de hacerlo, usando un spread operator
            })}
        </div>
    )
}