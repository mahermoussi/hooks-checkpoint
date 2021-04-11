import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({movie}) => {
    return (
        <div>
            <div class="card" style={{width:"18rem", marginTop:"10px" ,margin:'30px'}}>
  <img src={movie.image} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{movie.name}({movie.year})</h5>
    <p class="card-text">{movie.story}</p>

<div>
{
[1,2,3,4,5].map(el =>(
    el<=movie.rating?
    <i key={el}    style={{color:"yellow"}}class="fas fa-star"></i> :<i key={el}    class="fas fa-star"></i>))

}
</div><br/>

    <Link to={`/trailer/${movie.id}`} class="btn btn-primary">More</Link>
  </div>
</div>
        </div>
    )
}

export default Card

