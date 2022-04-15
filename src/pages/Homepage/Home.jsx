import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import "./home.scss"
import List from "../../components/list/List"
import { useEffect, useState } from "react";
import MovieService from '../../services/movie_service'


const categoriesFeatured = ['adventure', 'horror', 'comedy'];

const Home = (props) => {
  const [movies, setMovies] = useState();
  const [adventureMovies, setAdventureMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  

  const moviesCategories = [adventureMovies, horrorMovies, comedyMovies];
  



  useEffect(() => {
    // MovieService.getMoviesByGenre("adventure").then((res) => {
    //   setAdventureMovies(res)
    // })
    // MovieService.getMoviesByGenre("horror").then((res) => {
    //   setHorrorMovies(res)
    // })
    // MovieService.getMoviesByGenre("comedy").then((res) => {
    //   setComedyMovies(res)
    // })

    categoriesFeatured.forEach(category => {
      MovieService.getMoviesByGenre(category).then((res) => {
        category == "adventure" ? setAdventureMovies(res) : category == "horror" ? setHorrorMovies(res) : setComedyMovies(res);
      })
    })

  }, []);

 


  // const [adventureMovies, setAdventureMovies] = useState();
  // const [dramaMovies, setDramaMovies] = useState();
  // console.log(horrorMovies)
  return (
    <div className="home">
      {/* <Navbar props={props.props} /> */}
      <Featured type="movie" />
      {


        moviesCategories.map(category => {
          console.log("kjhdskdksksnksdnk")
          console.log(category)
          console.log(adventureMovies)
          return (category && <List props={category} />)
        })



      }

      {/* {adventureMovies && <List props={adventureMovies} />}
        {horrorMovies && <List props={horrorMovies} />}
        {comedyMovies && <List props={comedyMovies} />} */}

    </div>
  );
};

export default Home;

