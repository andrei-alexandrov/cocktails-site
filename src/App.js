import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import NavigationBar from './components/Navbar/NavigationBar';
import store from './store/store';
import { Analytics } from "@vercel/analytics/react";

import './App.scss';
import StartingPage from "./pages/StartingPage/StartingPage";

function App() {

  const [showContent, setShowContent] = useState(() => {
    return JSON.parse(sessionStorage.getItem("showContent")) || false;
  });

  useEffect(() => {
    sessionStorage.setItem("showContent", JSON.stringify(showContent));
  }, [showContent]);

  const handleEnterComplete = () => {
    console.log("ENTERED THE APP")
    setShowContent(true);
  };

  return (
    <div className={`App ${showContent ? "" : "starting-page-background"}`}>
      {showContent ?
        <Provider store={store}>
          <NavigationBar />

        </Provider>
        :
        <StartingPage onEnter={handleEnterComplete} />
      }
      <Analytics />
    </div>
  );
}

export default App;
