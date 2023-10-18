import { useState } from "react"
import drinks from  "../img/drinks.jpg"
import { set } from "react-hook-form"
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
                </div>
            </div>
        ));
      }

    function nextSlide(){
        if (index < slideContent.length-1) {
            setIndex(index + 1)
            setSlideContent(slideContent.map((content,key) => {
                    return {...content, active: (key === (index))}
            }))
            setAnimationDirection("nextAnim")
            console.log(true)
            return true
        }
        else {
            setAnimationDirection("prevAnim")
            setIndex(0)
            return false
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
          return true
        }
        
        else return false
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
   
            <div className="dotContainer">
                {indexDot()}
            </div>

            <div onClick={nextSlide}>Olá</div>
        </div>
    )
}
export default Carrousel