// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Button from '@mui/material/Button';
import "./App.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
//import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from 'react';


import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import {Switch,Route,Link} from "react-router-dom";



//input form;

//import { styled } from '@mui/material/styles';
//import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});




const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

 function CustomizedInputs({value,onChange}) {
  return (
   
      
      <ValidationTextField
        label={value}
        required
        variant="outlined"
        
        onChange={onChange}
        id="validation-outlined-input"
      />
  );
}
const movies =
 [{name:"RRR",
 image:"https://www.filmibeat.com/ph-big/2021/12/rrr_163903031450.jpg",
 rating:9,
 summary:"A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920's."},
 {name:"Bahubhali-2",
 image:"https://wallpapercave.com/dwp2x/wp4027395.jpg",
 rating:8.5,
 summary:"When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom."},
 {name:"Bahubhali-1",
 image:"https://wallpapercave.com/dwp2x/wp1851939.jpg",
 rating:8,
 summary:"In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples."},
 {name:"Naan-E",
 image:"https://wallpapercave.com/wp/wp7489196.jpg",
 rating:7,
 summary:"Since the head of a housefly is made up almost entirely of eye and very little muscle, conveying emotion as the fly was extremely difficult."},
 {name:"Maveeran",
 image:"http://i.indiglamour.com/photogallery/tamil/movies/2011/may10/Maaveeran/wide/Maaveeran_5715.jpg",
 rating:4,
 summary:"A warrior gets reincarnated 400 years later, after trying to save the princess and the kingdom, who also dies along with him. He then sets back again to fight against all odds and win back his love."},
 ]
 ;



export default function App() {

  

 return(
   <div>
     <nav>
     <div>
       <Link to="/">Welcome</Link>
       </div>
       <div>
       <Link to="/movieList">MovieList</Link>
       </div>
       <div>
       <Link to="/addMovie">AddMovie</Link>
       </div>
     </nav>
     <Switch>
       <Route exact path="/">
         <h1 className="welcome">Welcome to your Movie List Collection</h1>
       </Route>
       <Route exact path="/movieList">
          <MovieList/>
       </Route>
       <Route exact path="/addMovie">
          <AddMovie/>
       </Route>
     </Switch>
   </div>
 );
}

let updatedMovies=[...movies];


function AddMovie(){

const [added,adding] = useState(movies);
updatedMovies = [...added];

const [name,naming] = useState("");
const [image,imaging]=useState("");
const [rating,rate]=useState("");
const [summary,story]=useState("");

const newMovie = {name,image,rating,summary};
  return(
    <div>
     <div className="addMovie">
       <Box component="form" noValidate sx={{ display: 'grid', gridTemplateColumns:"1fr", gap: 0.5, padding:"0.5rem" }}>   
         <h3 style={{color:"red"}}>Add your Favourite Movie too!!!</h3>
         <FormControl variant="standard">
         </FormControl>
         <CustomizedInputs value={"Name"} onChange={(event)=>{naming(event.target.value);}}/>

         <FormControl variant="standard">
         </FormControl>
         <CustomizedInputs value={"Thumbnail"} onChange={(event)=>{imaging(event.target.value);}}/>
        
         <FormControl variant="standard">
         </FormControl>
         <CustomizedInputs value={"Rating"} onChange={(event)=>{rate(event.target.value);}}/>

         <FormControl variant="standard">
         </FormControl>
         <CustomizedInputs value={"Summary"} onChange={(event)=>{story(event.target.value);}}/>

      
        <Button variant="contained" color="success" onClick={()=> {(newMovie.name!=="" && newMovie.image!=="" &&newMovie.rating!=="" &&newMovie.summary!=="") ? adding([...added,newMovie]): alert("Give Details To add Movie or cancel");}}>Add Movie</Button>
        <Button variant="contained" color="error" onClick={()=>{adding([...added])}}>Cancel</Button>
        
      </Box>
     </div>
    </div>
  )
}

function MovieList(){

  
  const added =  (updatedMovies.length>movies.length)?updatedMovies:movies;
  return(
    <div>
       <div  className="App">
     <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1 className="title">RM's MovieTreat❤️</h1>
      
   </div>
   <Box sx={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(15rem,1fr))",gap:"2rem;",border:"2px solid red",padding:"1rem",borderRadius:"15px",background:"#bea3a3"}}>
      {added.map(({name,image,rating,summary},index)=><First key={index} name={name} image={image} rating={rating} summary={summary}/>)}
   </Box>
      
   </div>
    </div>
  )
}

function First({name,image,rating,summary}){
   

  const [remove,setRemove] = useState(false);
  const styles = {display: remove ? "none" : "block"};

  const [show,showing]= useState(false);

  const[likes,liking]=useState(Math.random().toFixed(1)*10);
  const[disLikes,disliking]=useState(Math.random().toFixed(1)*10);

  const check=(rating>=8.5)?"green" : (rating>4.5)?"yellow" :"red";
  const style=(check==="green")?{background:"green",color:"white"} : (check==="yellow")? {background:"yellow",color:"black"} :  {background:"red",color:"white"} ;
  const check1=(rating>=8.5)?"😀" : (rating>=4.5)? "🙂": "😒" ;


  return (
    <div style={styles} className="Movies">
      <img className="img" src={image} alt={name}/>
     <div className="nameAndRAndD">
       <div className="nameAndR">
     <h2>{name}</h2>
     <p className="rating">{check1}<span style={style}>{rating}</span></p>
     </div>
     <IconButton aria-label="delete" size="large" color="error" onClick={()=>setRemove(!remove)}>
  <DeleteIcon />
</IconButton>
    </div>


    <Typography component="legend" color="error">Your Rating?</Typography>
<StyledRating
  name="customized-color"
  color="error"
  defaultValue={Math.random().toFixed(1)*5}
  getLabelText={(value:number) => `${value} Heart${value !== 1 ? 's' : ''}`}
  precision={0.5}
  icon={<FavoriteIcon fontSize="inherit" />}
  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
/>

    <div className="buttons">
    <Button color="error" onClick={()=>showing(!show)} variant="contained">Spoiler?👀</Button>
 
    </div>
      {show ?<p className="summary"><b>Summary - </b>{summary}</p>: ""}
    
    <div className="Likes">
    <Button variant="contained" onClick={()=>liking(likes+1)}>👍{likes}</Button>
    <Button variant="contained" color="error" onClick={()=>disliking(disLikes+1)}>👎{disLikes}</Button>
    </div>
  </div>
         );
 }

