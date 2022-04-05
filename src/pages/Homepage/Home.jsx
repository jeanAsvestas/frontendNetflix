import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import "./home.scss"
import List from "../../components/list/List"

const Home = (props) => {
  return (
    <div className="home">
      {/* <Navbar props={props.props} /> */}
          <Featured type="movie"/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
      </div>
  );
};

export default Home;
