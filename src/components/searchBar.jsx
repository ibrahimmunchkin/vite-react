const Searchbar = () =>{
    return(
        <>
        <div className="searcher">
            <input type="text" placeholder="Search Product"  id="search" className="search"/>
            <input type="button" value="FIND" className="searchBtn"/>
        </div>
        </>
    )
}
export default Searchbar;