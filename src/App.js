
import { useState } from 'react';
import AddMovies from './Components/AddMovies'
import FilterMovie from './Components/FilterMovie';
import ListMovies from './Components/ListeMovies';
import NavMovies from './Components/NavMovies';
import './App.css'
import AddAsma from './Components/AddAsma';
import { Routes ,Route } from 'react-router-dom';
import Home from './Components/Home';
import Description from './Components/Description';

function App() {
  const [movies,setMovies] = useState([
    {title : 'Spider-Man: No Way Home', description :'Peter Parker s secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.',videoURL:"https://www.youtube.com/embed/6Vxf_BL6qFA",posterURL:'https://www.movies.ch/db_data/movies/spiderman8/artwrk/ki_l/SONY_SNH_ONESHEET_FLYING_A4_21.jpg',rating : 4, id : Math.random()},
    {title : 'Toy Story', description :'Toy Story is about the secret life of toys when people are not around. When Buzz Lightyear, a space-ranger, takes Woody s place as Andy s favorite toy, Woody doesn t like the situation and gets into a fight with Buzz.',videoURL:"https://www.youtube.com/embed/lkaZZgWkxj4",posterURL:'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg',rating : 5, id : Math.random()},
    {title : 'THE BATMAN', description :'Deux années à arpenter les rues en tant que Batman et à insuffler la peur chez les criminels ont mené Bruce Wayne au coeur des ténèbres de Gotham City. Avec seulement quelques alliés de confiance - Alfred Pennyworth, le lieutenant James Gordon - parmi le réseau corrompu de fonctionnaires et de personnalités de la ville, le justicier solitaire s est imposé comme la seule incarnation de la vengeance parmi ses concitoyens',videoURL:"https://www.youtube.com/embed/frh95XBeV_o",posterURL:'https://fr.web.img5.acsta.net/pictures/22/02/16/17/42/3125788.jpg',rating : 2, id : Math.random()},
    {title : 'A Peine J’ouvre Les Yeux', description :'Tunis, été 2010, quelques mois avant la Révolution, Farah 18 ans passe son bac et sa famille l’imagine déjà médecin… mais elle ne voit pas les choses de la même manière. Elle chante au sein d¹un groupe de rock engagé. Elle vibre, s’enivre, découvre l’amour et sa ville de nuit contre la volonté d’Hayet, sa mère, qui connaît la Tunisie et ses interdits.',videoURL:"https://www.youtube.com/embed/8O9gduLW5xA",posterURL:'https://pictures.artify.tn/media/r07wsehw43shedjuick2.jpg?width=200',rating : 3, id : Math.random()},
  ])

const [textP,setTextP] = useState('')
const [brahimP,setBrahimP] = useState(0)
  return (
    <div>
      <NavMovies/>
      <br/>
      <AddAsma movies={movies} setMovies={setMovies}/>
      <br/>
      <FilterMovie setTextP={setTextP} setBrahimP={setBrahimP} textP={textP} brahimP={brahimP}/>
      {/* <Home/> */}
      <Routes>
         <Route path='/'element={<Home/>}/>
         <Route path='/list' element={ <ListMovies movies={movies} setMovies={setMovies} textP={textP} brahimP={brahimP}/>}/>
         <Route path='/list/:id' element={<Description movies={movies}/>}/>
      </Routes>
      
     


      
      {/* <AddMovies movies={movies} setMovies={setMovies}/> */}
     
     
      
    </div>
  );
}

export default App;
