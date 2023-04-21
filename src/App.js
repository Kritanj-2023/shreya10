import React , { useEffect } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { getAllDetails } from "./utils/firebaseFunctions";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

export default function App() {
  const [{ details }, dispatch] = useStateValue();


  const fetchData = async () => {
    await getAllDetails().then((data) => {
      dispatch({
        type: actionType.SET_DETAILS,
        details : data,
      });
    });
  };


  useEffect(() => {
    fetchData();
  }, []);

  return <div>
    
    <AnimatePresence >
      <div className="w-screen h-auto flex flex-col bg-primary">
        {/* <Header /> */}

        <main className="w-full">
          <Routes>
          <Route path="/" element={<MainContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  </div>;
}
