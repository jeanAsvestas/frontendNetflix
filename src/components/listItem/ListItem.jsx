// import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
// import "./listItem.scss"
// import { useState } from 'react'

// export default function ListItem() {
//   const [isHovered, setIsHovered] = useState(false);
//   const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
//   return (
//     <div 
//      className="listItem"
//      onMouseEnter={()=>setIsHovered(true)}
//      onMouseLeave={()=>setIsHovered(false)}>
//         <img src="https://www.homecinemachoice.com/images/styles/600_wide/public/scarface%2001.jpg" 
//         alt="" />

//       {isHovered && (
// <>
//     <video src={trailer} autoPlay={true} loop/>
//     <div className="itemInfo">
//       <div className="icons">
//           <PlayArrow/>
//           <Add/>
//           <ThumbUpAltOutlined/>
//           <ThumbDownAltOutlined/>
//         </div>
//         <div className="itemInfoTop">
//           <span>1 hour,42 minutes</span>
//           <span>18+</span>
//           <span>2005</span>
//           </div>
//           <div className="description">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             ratione voluptatem, qui consequatur officia?
//             </div>
//             <div className="genre">Action</div>
//       </div></>
//       )}
//     </div>
//   );
// }
import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://www.homecinemachoice.com/images/styles/600_wide/public/scarface%2001.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span>+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}