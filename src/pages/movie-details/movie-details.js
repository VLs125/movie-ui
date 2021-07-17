import React,{useState,useEffect} from 'react'
import apis from '../../api';


const MovieDetails = (props) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    const id = props.match.params.id
    let isCanceled = false
  apis.getMovieById(id)
        .then(movie => {
            setData(movie.data.data);
            setIsLoading(true);
        })
    return () => {
        isCanceled = true;
    }
}, [])
    return(
        <React.Fragment>
        <div>Film</div>
        <div> {data.name} </div>
        <img src={data.img}/>
        </React.Fragment>)


}

export default MovieDetails