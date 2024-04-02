import { useState } from "react";
import ShowModal from "../ShowModal";
import SideBar from "../SideBar";
import { Context } from "../../context";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const openModal = () => {
    setShowModal(!showModal)
  }
  const openSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <>
      <Context.Provider value={{ openModal, openSideBar, showModal, sideBar }}>
        <SideBar />
        <ShowModal />
      </Context.Provider>
    </>
  );
}

export default App;
