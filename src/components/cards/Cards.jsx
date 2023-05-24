import Card from '../card/Card';


export default function Cards( {characters, onClose} ) {
 
   return (
   <div style={{display: 'flex',
                justifyContent: 'space-between',
                
      }}> 

 {characters.map(character =>(
    <Card
    key={character.id}
    id={character.id}
    name={character.name}
    status={character.status}
    species={character.species}
    gender={character.gender}
    originName={character.origin?.name}
    image={character.image}
    onClose={onClose}
     />
 ))
 }

   </div>
   );
}

