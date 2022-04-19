import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"
import MovieService from '../../services/movie_service'
import AuthService from '../../services/auth_service';
import { useEffect, useState } from "react";

export default function Watch() {
  const [movie, setMovie] = useState();
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  useEffect(() => {
    MovieService.getOneMovie(currentUser.id, window.location.pathname.split('/')[2]).then((res) => {
      setMovie(res)
    })

  }, []);
  //console.log(movie.movie.movieContent);
  return (
    <div className='watch'>
            <div className="back">
                <ArrowBackOutlined/>Home
                </div>
                <iframe className='videoz'
                width="885" 
                height="498" 
        src={`https://www.youtube.com/embed/${movie?.movie.movieContent}`}
                title="YouTube video player" 
        frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
          
    </div>
  )
}
// K2P2ByOtOOs