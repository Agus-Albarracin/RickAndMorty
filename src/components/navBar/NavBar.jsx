import SearchBar from "../searchBar/SearchBar";


export default function NavBar(props) {
    return (
       <div>

          <SearchBar onSearch={props.onSearch} />

       </div>
       
    );
 }