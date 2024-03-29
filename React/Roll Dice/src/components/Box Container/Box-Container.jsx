import { useState, useEffect } from 'react'
 //'Dices-Img.js' contains dice images mapping
import diceImages from './Dices-Img'
import "./box-container.css"

function BoxContainer() {
  // Function for Generate a random number between 1 and 6 
  const randNum = () => {
    const num = Math.floor(Math.random() * 6) + 1
    return num
  }

  // imgIndex -> the current index of the image being displayed
  const [imgIndex, setImgIndex] = useState(() => randNum())
  // flipAnimation -> animation class add or remove
  const [flipAnimation, setFlipAnimation] = useState('')


  // Handle Roll Click Button
  const handleRollClick = () => {
    // sets random generated value to imageIndex
    setImgIndex(() => randNum())
    setFlipAnimation("flip-rotation")
  }

  // Reset the animation by clearing the flipAnimation state
  const resetAnimation = () => {
    setFlipAnimation('')
  }

  // Triggers the effect whenever imgIndex changes
  useEffect(() => {
    setFlipAnimation("flip-rotation")


    return () => {
      resetAnimation
    }

  }, [])  // Empty dependency array ensures the effect runs only once on mount



  return (
    //Main center container
    <section className="container"> 
      <div className="dice-wrapper">
        {/* Render the dice image based on the imgIndex state */}
        <img src={diceImages[imgIndex]} alt="&#128517;" className={`dice-img ${flipAnimation}`} onAnimationEnd={resetAnimation}/>
      </div>

      {/* Button to roll the dice */}
      <button className="roll-btn btn-text" onClick={handleRollClick}>Roll Dice</button>
    </section>
  )
}

export default BoxContainer
