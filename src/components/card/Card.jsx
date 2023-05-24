import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (


      <div className={styles.container}>


    
         <div className={styles.divButtonCont}>
        <button className={styles.buttonCont} onClick={() => props.onClose(props.id)}> X </button>
  
        </div>



    
<Link to={`/detail/${props.id}`} >
         <div className={styles.divDataCont}>

    
                <div className={styles.divDataNameCont}>

               

                <h2>{props.name}</h2>

                  
                
               
                         
                </div>
         


           <img className={styles.fotitos} src={props.image} alt={props.name} />
        
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         
         <h2>{props.origin}</h2>

         </div>
</Link> 

      </div> );}