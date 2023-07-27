import React from 'react'
import './Header.css';
import { useEffect,useState
 } from 'react';
import ResNav from '../ResponsiveHeader/ResNav';
const Header = () => {
	const [scrollState, setScrollState] = useState("static");
    let listener=null;
    useEffect(() => {
		listener = document.addEventListener("scroll", (e) => {
			// var scrolled = document.scrollingElement.scrollTop;
			// if (scrolled >= 20) {
			// 	setScrollState("fixed");
			// } else {
			// 	setScrollState("static");
			// }
		});
		return () => {
			document.removeEventListener("scroll", listener);
		};
	}, [scrollState]);

  return (
    <>
    <ResNav/> 
    <div className='hidden md:block'>
    
    <nav className={`bg-[#001E25] transition ease-in-out flex top-0 right-0 left-0  drop-shadow-md px-5 gap-4 justify-around items-center z-[100] ${scrollState}`}>
        <div className="boxq text-center">
            <a className="internal_link" href="../index.html#aim">
                <img className="icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmpbB3jSjMF-FDgIL1E-eRN6eeCDLSsvoAQ&usqp=CAU"/><br/>
                Aim</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="../index.html#theory">
                <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1648/1648697.png"/><br/>
                Theory</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="../index.html#procedure">
                <img className="icon"
                    src="https://cdn4.iconfinder.com/data/icons/project-management-1-11/65/23-512.png"/><br/>
                Procedure</a>
        </div>
        <div className="boxq"  >
            <a className="internal_link" href="../index.html#practice">
                <img className="icon"
                    src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/editable-minimal.png?v=6"></img>
                    <br/>
                Working</a>
        </div>
        <div className="boxq" id='target'>
            <a className="internal_link" href="../index.html#simulation">
                <img className="icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"/><br/>
                Simulation</a>
        </div>
        <div className="boxq">
            <a className="internal_link" href="../index.html#quiz">
                <img className="icon"
                    src="https://img.favpng.com/21/11/8/new-york-city-fotolia-stock-photography-sales-png-favpng-f9ZiUMqBcZK0LNfZPfC674ZxZ_t.jpg"/><br/>
                Quiz</a>
        </div>
        {/* <!-- <div className="boxq">
            <a className="internal_link" href="#observation">
                <img className="icon"
                    src="https://img.freepik.com/free-vector/business-management-vector_53876-44131.jpg?size=338&ext=jpg"><br>
                Observations</a>
        </div> --> */}
        {/* <div className="boxq">
            <a className="internal_link" href="../index.html#result">
                <img className="icon"
                    src="https://cdn4.iconfinder.com/data/icons/collection-of-online-business-icons/64/Board_Chart_Results_Business-512.png"/><br/>
                Result</a>
        </div> */}
        <div className="boxq">
            <a className="internal_link" href="../index.html#references">
                <img className="icon" src="https://image.pngaaa.com/134/5592134-middle.png"/><br/>
                References</a>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Header