import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import ArtistsMain from "./components/Artists";
// import ArtistsFocus from "./components/views/artistsFocus";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Header />
          <main className="" id="content" role="main">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/Artists" component={ArtistsMain} />
              <Route exact path="/Artists/:id" component={ArtistsMain} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
