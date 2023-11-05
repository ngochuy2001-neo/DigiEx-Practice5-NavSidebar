import { AiOutlineMenuFold, AiOutlineMenuUnfold, AiFillHome } from "react-icons/ai";
import { BsFillPersonFill, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { TbTransfer } from "react-icons/tb"
import { CiCoinInsert} from "react-icons/ci"
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { useState } from "react";
import sidebarData from "@/utils/sidebardata";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavSideBar = () => {
  const path = usePathname();

  const checkIcon = (iconName: string) => {
    switch(iconName){
      case 'AiFillHome':
        return <AiFillHome />;
      case 'BsFillCreditCard2FrontFill':
        return <BsFillCreditCard2FrontFill />;
      case 'CiCoinInsert':
        return <CiCoinInsert />
      case 'MdOutlineCurrencyExchange':
        return <MdOutlineCurrencyExchange />;
      case 'TbTransfer':
        return <TbTransfer />;
      default:
        return null;
    }
  }

  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const handleFolding = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="h-full w-fit p-3">
      <div
        style={isExpanded ? { width: "300px" } : { width: "70px" }}
        className="h-full flex flex-col justify-between shadow-lg shadow-blue-400 transition-width duration-300 bg-gradient-to-tr from-blue-800 to-blue-950 rounded-xl"
      >
        <div
          style={
            isExpanded
              ? { justifyContent: "space-between" }
              : { justifyContent: "center" }
          }
          className="header flex items-center text-white text-2xl w-full h-[100px]"
        >
          {isExpanded ? <div className="appTitle ml-3">SHFINANCE</div> : ""}
          <button className="mr-3 ml-3" onClick={handleFolding}>
            {isExpanded ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </button>
        </div>
        <div className="h-full flex flex-col items-center">
          <ul className="w-[90%]">
            {sidebarData.map((value, index) => (
              <li
                style={
                  path === value.link ? { backgroundColor: "#f4b72e" } : {}
                }
                className="text-white flex flex-col my-3 w-full h-fit hover:bg-blue-400 rounded-sm"
                key={index}
              >
                <Link
                  className="w-full h-[50px] flex items-center"
                  href={value.link}
                  style={
                    isExpanded? {marginLeft: "5px"}: {justifyContent: "center"}
                  }
                >
                  <div className="flex justify-center" style={isExpanded? {marginRight: "5px"}: {}}>
                  {checkIcon(value.icon)}
                  </div>
                  {isExpanded? value.text: ""}
                </Link>
                {value.submenu
                  ? value.submenu.map((subValue, index) => (
                      <Link
                        key={index}
                        style={
                          path.indexOf(value.link) != -1
                            ? {
                                display: "flex",
                                backgroundColor:
                                  path.indexOf(subValue.link) != -1
                                    ? "#f4b72e"
                                    : "",
                                justifyContent: isExpanded? "start": "center",
                              }
                            : { display: "none" }
                        }
                        className="h-[50px] hover:bg-blue-300 flex items-center px-3 transition-width duration-200 bg-blue-950"
                        href={value.link + subValue.link}
                      >
                        <div className="flex items-center">
                          {checkIcon(subValue.icon)}
                        </div>
                        {isExpanded? subValue.text: ""}
                      </Link>
                    ))
                  : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-[70px] flex items-center text-white"
          style={isExpanded? {}:{justifyContent: "center"}}
        >
          <div className="m-3">
            <BsFillPersonFill />
          </div>
          {isExpanded? 
          <div>Account</div>
          : ""}
        </div>
      </div>
    </div>
  );
};

export default NavSideBar;
