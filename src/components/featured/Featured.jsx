import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="all">All</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Adventure</option>
            <option value="crime">Crime</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="documentary">Documentary</option>
            <option value="drama">Drama</option>
            <option value="sci-fi">Sci-fi</option>
          </select>
        </div>
      )}
       <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
       alt="" 
       />
      <div className="info">
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQq7tk0559I6V-2JOzeZUVb9NBKmKbBGHy5tFraxB9jN-O9cBB595XlGhG9Ao2JK2aF3Q0ydLBYyFHSe0OFyThDRCqsrVt-bioHd.webp?r=933" 
             alt="" 
        />
        <span className="desc">
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Amet modi 
              officia expedita aspernatur, ipsa saepe 
              in consequuntur, voluptates 
              nemo temporibus fuga deserunt, dolorem 
              ut 
              ut rerum veniam iste illum quae officiis?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
        </div>
      </div>
  );
}

