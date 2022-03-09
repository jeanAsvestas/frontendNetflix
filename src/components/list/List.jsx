import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef , useState } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"

export default function List() {

  const[slideNumber, setSlideNumber] = useState(0)
  const listRef = useRef()

  const handleClick = (direction) => { 
    let distance = listRef.current.getBoundingClientRect().x - 50
     if (direction === "left" && slideNumber > 0){
       setSlideNumber(slideNumber - 1)
       listRef.current.style.transform = `translateX(${225 + distance}px)`
     }
     console.log(distance)
     if (direction === "right" && slideNumber < 5){
       setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-225 + distance}px)`
    }
  }
  
  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}/>
            <div className="container2" ref={listRef}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
    </div>
  )
}
