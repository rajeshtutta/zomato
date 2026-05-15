import Header from "./components/Header/Header";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import AccContainer from "./components/AccContainer/AccContainer";
import CTA from "./components/CTA/CTA";
import Cities from "./components/Cities/Cities";
import Collection from "./components/Collections/Collection";
import Card from "./components/Card/Card";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";

import {
  Routes,
  Route,
} from "react-router-dom";

function Home() {

  return (
    <>
      <Header />
      <Card />
      <Collection />
      <Cities />
      <CTA />
      <AccContainer />
      <Footer />
    </>
  );
}

function App() {

  return (

    <div className="App">

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;
