import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from "react-redux";





function Card(props) {
const { id, name, status, species, gender, origin, image, onClose} = props;
const dispatch = useDispatch();

const [isFav, setIsFav] = useState(false);
const { myFav } = useSelector((s) => s);

const  handleFavorite = () => {

if(isFav){ 
           setIsFav(false);
           dispatch(removeFav(id));}
else{
           setIsFav(true);
          dispatch(addFav(props)); }
}


useEffect(() => {
   myFav.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFav]);

return (
<div className={styles.container}>

<button onClick={handleFavorite}> {isFav ? '❤️' : '🤍' }</button>

<div className={styles.divButtonCont}>
        <button className={styles.buttonCont} onClick={() => props.onClose(props.id)}> X </button>
</div>

<Link to={`/detail/${props.id}`} >

<div className={styles.divDataCont}>


<div className={styles.divDataNameCont}>
<h2>{props.name}</h2>
</div>
<img className={styles.fotitos} src={props.image} alt={props.name} />

</div>

</Link> 

</div> );}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (character) => {dispatch(addFav(character))},
      
//       removeFav: (id) => {dispatch(removeFav(id))}
//    }
// };

// const mapStateToProps = (state) =>{
//    return{
//       myFav: state.myFav
//    }    
// }
export default Card;
// export default connect(mapStateToProps, mapDispatchToProps)(Card);


