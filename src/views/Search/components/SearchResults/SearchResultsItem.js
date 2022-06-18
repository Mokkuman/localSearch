export default function SearchResultsItem({name,email}){
    return (
        <div 
            style={{backgroundColor: "#E8E7E7", 
                margin: "1em 0 1em 2em",padding:"0.5em 0 0.5em 2em"}
        }>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}