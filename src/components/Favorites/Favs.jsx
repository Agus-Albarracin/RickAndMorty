import Card from "../card/Card";
import { connect } from "react-redux";

const Favorites = ({myFavs}) => {
   return(
    <div>
        {
            myFavs.map(fav =>{
                return(
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    status={fav.status}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    />
                )
            })
        }
    </div>
   )
}
const mapStateToProps = (state) =>{
    return{
        myFavs: state.myFav
    }
}
export default connect(mapStateToProps, null)(Favorites);