import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* {/* <Route
          path="/*"
          element={
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>404 | Page Not Found</h1>
            </div>
          } 
        /> */}

        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
          {/* Navigate this Route For redirection  matlab hum koi galat link daalenge tab hum login pade par hi redirect karenge Page Not Found waale page par nahi jayenge*/}
      {/* <Route path="/*" element={<Navigate to="/login"/>}/> */}
    </>
  );
}

export default App;
