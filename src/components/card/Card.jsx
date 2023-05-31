import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';




function Card(props) {

const [isFav, setIsFav] = useState(false);

const  handleFavorite = () => {

if(isFav){ 
           setIsFav(false);
           removeFav(props.id);}
else{
           setIsFav(true);
           addFav(props); }
}


useEffect(() => {
   props.myFav.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFav]);

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

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      
      removeFav: (id) => {dispatch(removeFav(id))}
   }
};

const mapStateToProps = (state) =>{
   return{
      myFav: state.myFav
   }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


