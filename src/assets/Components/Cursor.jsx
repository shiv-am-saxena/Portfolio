/* eslint-disable no-unused-vars */
import { useState } from "react"

const Cursor = () => {
  const [color, setcolor] = useState('#44bbff');
  return (
    <div className="cursor" style={{borderColor:color}}></div>
  )
}

export default Cursor