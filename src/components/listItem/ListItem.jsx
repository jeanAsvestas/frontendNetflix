import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import "./listItem.scss"

export default function ListItem() {
  return (
    <div className="listItem">
        <img src="https://www.homecinemachoice.com/images/styles/600_wide/public/scarface%2001.jpg" alt="" />

    <div className="itemInfo">
      <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownAltOutlined/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour,42 minutes</span>
          <span>18+</span>
          <span>2005</span>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            ratione voluptatem, qui consequatur officia?
            </div>
            <div className="genre">Action</div>
      </div>
    </div>
  );
}
