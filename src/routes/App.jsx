import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinning from "../components/LoadingSpinning";

function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      
        <Header />
        <FetchItems />
        {fetchStatus.currentFetching ? <LoadingSpinning /> : <Outlet />}
        <Footer />
      
    </>
  );
}

export default App;
