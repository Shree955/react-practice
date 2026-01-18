export default function Search( search, setsearch, handlesearch){
    return(
        <div className="search-engine">
            <input
             type="text"
             placeholder ="Enter city name"
             name="search"
             value={search}
             onChange={(event) => setsearch(event.target.value)}
             />
             <button onClick={handlesearch}>Search</button>

        </div>
    );
}