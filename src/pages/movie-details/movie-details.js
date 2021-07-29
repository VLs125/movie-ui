import React,{useState,useEffect} from 'react'
import apis from '../../api';


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
        <React.Fragment>
        <div>Film</div>
        <div> {data.name} </div>
        <img src={data.img} alt={data.name}/>
        </React.Fragment>)


}

export default MovieDetails