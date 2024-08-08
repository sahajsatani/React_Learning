import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/home"
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/user/0"
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  User
                </NavLink>
              </li>
              <li>
                <NavLink to="/github"
                  className={() =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

// function Header() {
//   return (
//     <header
//       style={{
//         boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//         position: "sticky",
//         zIndex: 50,
//         top: 0,
//       }}
//     >
//       <nav
//         style={{
//           backgroundColor: "white",
//           borderColor: "#e5e7eb",
//           padding: "0.625rem 1rem",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-between",
//             alignItems: "center",
//             margin: "0 auto",
//             maxWidth: "1280px",
//           }}
//         >
//           <Link to="/home" style={{ display: "flex", alignItems: "center" }}>
//             <img
//               src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//               style={{
//                 marginRight: "0.75rem",
//                 height: "2.5rem",
//                 width: "2.5rem",
//               }}
//               alt="Logo"
//             />
//           </Link>

//           <div style={{ display: "flex", alignItems: "center", order: 2 }}>
//             <Link
//               to="#"
//               style={{
//                 color: "#1f2937",
//                 backgroundColor: "transparent",
//                 borderRadius: "0.375rem",
//                 fontSize: "0.875rem",
//                 padding: "0.5rem 1.25rem",
//                 marginRight: "0.5rem",
//                 outline: "none",
//                 transition: "background-color 0.2s",
//               }}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#f9fafb")
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.style.backgroundColor = "transparent")
//               }
//             >
//               Log in
//             </Link>
//             <Link
//               to="#"
//               style={{
//                 color: "white",
//                 backgroundColor: "#ea580c",
//                 borderRadius: "0.375rem",
//                 fontSize: "0.875rem",
//                 padding: "0.5rem 1.25rem",
//                 marginRight: "0.5rem",
//                 outline: "none",
//                 transition: "background-color 0.2s",
//               }}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#c2410c")
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#ea580c")
//               }
//             >
//               Get started
//             </Link>
//           </div>

//           <div
//             style={{
//               display: "none",
//               justifyContent: "space-between",
//               alignItems: "center",
//               width: "100%",
//               order: 1,
//             }}
//             id="mobile-menu-2"
//           >
//             <ul
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginTop: "1rem",
//                 fontSize: "1rem",
//                 flexDirection: "row",
//                 gap: "2rem",
//                 marginTop: "0",
//               }}
//             >
//               <li>
//                 <NavLink
//                   to="/"
//                   style={({ isActive }) => ({
//                     display: "block",
//                     padding: "0.5rem 1rem",
//                     transition: "color 0.2s",
//                     color: isActive ? "#ea580c" : "#4b5563",
//                     borderBottom: "1px solid #e5e7eb",
//                   })}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ea580c")}
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.color =
//                       e.currentTarget.style.color === "#ea580c"
//                         ? "#ea580c"
//                         : "#4b5563")
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about"
//                   style={({ isActive }) => ({
//                     display: "block",
//                     padding: "0.5rem 1rem",
//                     transition: "color 0.2s",
//                     color: isActive ? "#ea580c" : "#4b5563",
//                     borderBottom: "1px solid #e5e7eb",
//                   })}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ea580c")}
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.color =
//                       e.currentTarget.style.color === "#ea580c"
//                         ? "#ea580c"
//                         : "#4b5563")
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   style={({ isActive }) => ({
//                     display: "block",
//                     padding: "0.5rem 1rem",
//                     transition: "color 0.2s",
//                     color: isActive ? "#ea580c" : "#4b5563",
//                     borderBottom: "1px solid #e5e7eb",
//                   })}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ea580c")}
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.color =
//                       e.currentTarget.style.color === "#ea580c"
//                         ? "#ea580c"
//                         : "#4b5563")
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/github"
//                   style={({ isActive }) => ({
//                     display: "block",
//                     padding: "0.5rem 1rem",
//                     transition: "color 0.2s",
//                     color: isActive ? "#ea580c" : "#4b5563",
//                     borderBottom: "1px solid #e5e7eb",
//                   })}
//                   onMouseOver={(e) => (e.currentTarget.style.color = "#ea580c")}
//                   onMouseOut={(e) =>
//                     (e.currentTarget.style.color =
//                       e.currentTarget.style.color === "#ea580c"
//                         ? "#ea580c"
//                         : "#4b5563")
//                   }
//                 >
//                   Github
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;
