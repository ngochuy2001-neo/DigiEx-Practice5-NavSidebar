
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { useState } from "react"

const NavSideBar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true)
  
  const handleFolding = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="h-full w-fit p-3">
      <div style={isExpanded? {width: "300px"} : {width: "70px", }} className="h-full transition-width duration-300 bg-gradient-to-tr from-blue-800 to-blue-950 rounded-xl">
        <div style={isExpanded? {justifyContent: "space-between"}: {justifyContent: "center"}} className="header flex items-center text-white text-2xl w-full h-[100px]">
          {isExpanded? <div className="appTitle ml-3">SHFINANCE</div>: ""}
          <button className="mr-3 ml-3" onClick={handleFolding}>
            {
              isExpanded? 
              <AiOutlineMenuFold/>
              :
              <AiOutlineMenuUnfold/>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavSideBar