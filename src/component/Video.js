import React from 'react'
import Data from '../moviesData'
const Video = ({match}) => {
    const filterData= Data.filter(el=> el.id == match.params.info)
        return (
            <div>
                <iframe width="560" height="315" src={filterData[0].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
        )
    }

export default Video
