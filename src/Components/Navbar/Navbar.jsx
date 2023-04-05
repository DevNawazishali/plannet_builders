// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// export default function App() {
//     const [navSize, setnavSize] = useState("10rem");
//     const [navColor, setnavColor] = useState("transparent");
//     const listenScrollEvent = () => {
//         window.scrollY > 10 ? setnavColor("#252734") : setnavColor("danger");
//         window.scrollY > 10 ? setnavSize("5rem") : setnavSize("8rem");
//     };
//     useEffect(() => {
//         window.addEventListener("scroll", listenScrollEvent);
//         return () => {
//             window.removeEventListener("scroll", listenScrollEvent);
//         };
//     }, []);

//     return (
//         <>
//             <nav
//                 style={{
//                     backgroundColor: "",
//                     height: navSize,
//                     transition: "all 1s"
//                 }}
//             >
//             <div className="container">

//             <div className="row">

//             <div className="col-2">
//                     <h4><article className="text-danger"> Planet Builders </article>  </h4></div>
//                 <div className="col-8">

//                 <ul>
//                     <li>Home</li>
//                     <li>Portfolio</li>
//                     <li>Our Team</li>
//                     <li>What We Do</li>
//                     <li>About Us</li>
//                     <li>Blog</li>
//                     <li>Contact Us</li>
//                 </ul>


//                 </div>
//                                <div className=" col-2   ms- px-5"><button>Get a quote</button></div>
 



//             </div>

//             </div>
//                           </nav>
//         </>
//     );
// }
