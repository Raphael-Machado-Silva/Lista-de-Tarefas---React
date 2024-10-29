
const Search = ({search, setSearch}) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input 
        placeholder="Digite para pesquisar..."
        type="text" 
        value={search} 
        onChange={(e)=> setSearch(e.target.value)} />
    </div>
  )
}

export default Search
