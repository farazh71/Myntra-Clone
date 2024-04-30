import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetchitem from "../components/Fetchitem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <Fetchitem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
};
export default App;
