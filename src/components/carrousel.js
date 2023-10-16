import { useState } from "react"
import drinks from  "../img/drinks.jpg"
function Carrousel(){
    const [index, setIndex] = useState(0)
    const [animationDirection, setAnimationDirection] = useState("nextAnim")


    const [slideContent, setSlideContent] = useState([
        {
            url: drinks,
            caption: "Imagem 1",
            active: true
        },
        {
            url: drinks,
            caption: "Imagem 2",
            active: false
        },
        {
            url: drinks,
            caption: "Imagem 3",
            active: false
        },
        {
            url: drinks,
            caption: "Imagem 4",
            active: false
        }
    ])

    function showSlide() {
        return slideContent.map((content, key) => (
          <div className="sliderContainer" key={key}>
            <div className={content.active ? `slide ${animationDirection}`
             : "slide none"}>
              <img src={content.url} alt="Imagem" />
              <div className="caption">{content.caption}</div>
            </div>
          </div>
        ));
      }

    function nextSlide(){
        if (index < slideContent.length-1) {
            setSlideContent(slideContent.map((content,key) => {
                    return {...content, active: key === index + 1}
            }))
            setIndex(index + 1)
            setAnimationDirection("nextAnim")
        }   
    }

    function prevSlide() {
        if (index > 0) {
          setSlideContent( 
            slideContent.map((content, key) => {
              return { ...content, active: key === index - 1 };
          }))
          setIndex(index - 1);
          setAnimationDirection("prevAnim")
        }
      }

    function indexDot(){
        return slideContent.map((content, key) => (
            <span key={key} onClick={() => goTo(key)} className={index === key ? "dot activeDot" : "dot"}></span>
          ));
    }

    function goTo(position){
        setSlideContent(
            slideContent.map((content,key)=>{
                return {...content, active: key === position}
        }))
        setIndex(position)
    }
      
    return (
        <div style={{position:"relative"}}>
            <div className="sliderContainer">
                {showSlide()}
            </div>
                <button className="prev" onClick={prevSlide}>Prev</button>
                <button className="next" onClick={nextSlide}>Next</button>
            <div>
                {indexDot()}
            </div>
        </div>
    )
}
export default Carrousel