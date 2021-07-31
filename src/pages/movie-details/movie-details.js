import React,{useState,useEffect} from 'react'
import apis from '../../api';
import './movie-details.css';

const MovieDetails = (props) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    const id = props.match.params.id
  apis.getMovieById(id)
        .then(movie => {
            console.log(movie)
            setData(movie);
            setIsLoading(true);
        })
    }, [props.match.params.id])
    return(
        <div className="movie-details">
        <div> {data.ruName}</div>
        <div> {data.enName} </div>
        <div> {data.rating} </div>
        <div>{data.url}</div>
        <img src={data.img} alt={data.name}/>
        </div>
        
        )


}

export default MovieDetails