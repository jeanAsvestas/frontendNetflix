import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"

export default function Watch() {
  return (
    <div className='watch'>
            <div className="back">
                <ArrowBackOutlined/>Home
                </div>
                <iframe className='videoz'
                width="885" 
                height="498" 
                src="https://www.youtube.com/embed/K2P2ByOtOOs"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
          
    </div>
  )
}
