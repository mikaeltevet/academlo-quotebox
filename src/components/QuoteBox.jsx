import React, { useEffect, useState } from 'react'
import quotes from '/src/json/quotes.json'

const colors = ["#004E89", "#533A7B", "#595758", "#DA3E52", "#29524A", "#5C4742", "#5A2A27", "#51513D", "#A30B37", "#2E294E"]

function QuoteBox() {
  const [currentQuote, setCurrentQuote] = useState(null)
  const [currentColor, setCurrentColor] = useState(null)

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  }

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const handleClick = () => {
    const newQuote = getRandomQuote()
    const newColor = getRandomColor()
    setCurrentQuote(newQuote)
    setCurrentColor(newColor)
  }

  useEffect(() => {
    handleClick();
  }, []);

  {document.body.style.backgroundColor = currentColor}

  return (
    <div className="quotebox">
        {currentQuote ? (
            <div>
                <p className="quote" style={{color:currentColor}}>{currentQuote.quote}</p>
                <p className="author" style={{color:currentColor}}>{currentQuote.author}</p>
            </div>
        ) : (
            <p>Click to display quote!</p>
        )}
      <button style={{background:currentColor}} onClick={handleClick}>Next quote</button>
    </div>
  )
}

export default QuoteBox