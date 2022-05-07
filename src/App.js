import Home from "./pages/Home/Home";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./App.scss";
import AboutUsDetail from "./pages/AboutUsDetail/AboutUsDetail";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";

/* The following line can be included in your src/index.js or App.js file */
import EventsAndWebinarsDetail from "./pages/EventsAndWebinarsDetail/EventsAndWebinarsDetail";
import ListArticlePage from "./pages/ListArticlePage/ListArticlePage";
import Footer from "./component/main/Footer/Footer";
import ErrorPage from "./component/main/ErrorPage/ErrorPage";
import Header from "./component/main/Header/Header";
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about_us" component={AboutUsDetail} />
          <Route path="/services" component={ServiceDetail} />
          <Route
            path="/events-and-webinars"
            component={EventsAndWebinarsDetail}
          />
          <Route path="/article" component={ListArticlePage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
