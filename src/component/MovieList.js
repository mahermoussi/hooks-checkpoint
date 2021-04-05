import React, {useState} from 'react'
import Card from './Card'
import data from '../moviesData'
import AddModal from './AddModal'

const MovieList = () => {
const [movies , setMovies] = useState(data);
const [isOpen ,setIsOpen] = useState(false);
const [inputFilter,setImputFilter]= useState('')
const [ratingFilter, setRating] =useState(null)
const closeModal = () => setIsOpen(false)
const addMovie = (newMovie) => setMovies([...movies, newMovie])
const filterList = movies.filter(el => ratingFilter !==null ? el.name.toLocaleLowerCase().includes(inputFilter) && el.rating == ratingFilter : el.name.toLocaleLowerCase().includes(inputFilter) )
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" onChange={(e)=>setImputFilter(e.target.value)} aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
<div>
    {
[1,2,3,4,5].map(el=>
<i key={el}     style={{color: el <= ratingFilter ? "yellow" : "black"}} class="fas fa-star" onClick={()=>setRating(el)}></i>)
    }</div>
  </div>
</nav>
            <button onClick={()=> setIsOpen(true)}>Add Movie</button>
            <AddModal isOpen={isOpen} closeModal={closeModal} addMovie={addMovie}/>
        <div style={{display:"flex" , justifyContent:"space-around"}}>
            { filterList.map((el,i) =>(
                <Card key={i} movie={el}/> 
            ) )

            }
            
        </div>
        </div>
    )
}

export default MovieList
