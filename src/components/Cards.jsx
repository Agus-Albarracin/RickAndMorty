import Card from './Card';

export default function Cards( {characters} ) {
 
   return (
   <div> 

 {characters.map(character =>(
    <Card
    key={character.id}
    name={character.name}
    status={character.status}
    species={character.species}
    gender={character.gender}
    originName={character.origin?.name}
    image={character.image}
    onClose = {() => window.alert('Emulador que se cierra')}
     />
 ))
 }

   </div>
   );
}

