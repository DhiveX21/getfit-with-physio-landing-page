import Home from "./pages/Home/Home";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./App.scss";
import AboutUsDetail from "./pages/AboutUsDetail/AboutUsDetail";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";

/* The following line can be included in your src/index.js or App.js file */
import EventsAndWebinarsDetail from "./pages/EventsAndWebinarsDetail/EventsAndWebinarsDetail";
import ListArticlePage from "./pages/ListArticlePage/ListArticlePage";
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about_us" component={AboutUsDetail} />
        <Route exact path="/services" component={ServiceDetail} />
        <Route
          exact
          path="/events-and-webinars"
          component={EventsAndWebinarsDetail}
        />
        <Route exact path="/article" component={ListArticlePage} />
      </Router>
    </div>
  );
}

export default App;
