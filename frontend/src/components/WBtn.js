import React from 'react'

const WBtn = ({color, hoverColor, hoverTextColor, text, textColor}) => {
  return (
    <button className={"mx-auto shadow-xl justify-center items-center font-bold py-2 px-4 rounded-lg inline-flex h-8 w-48 "+color+hoverColor+hoverTextColor+text+textColor}>
      {text}
      </button>
  )
}

export default WBtn;