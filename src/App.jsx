import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MovieContainer from "./components/MovieContainer";
import Loader from "./components/Loader";

// redux
import { useSelector } from "react-redux";

function App() {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);

  // redux to fetch loader info
  const loaderData = useSelector((state) => state.loader.value);

  return (
    <>
      <div className="relative">
        {/* if loader value is true than appears */}
        {loaderData && <Loader />}
        <Navbar />
        <Search />

        {/* if there is some data in content than this box will appear */}
        {Object.keys(contentData).length > 0 && <MovieContainer />}
      </div>
    </>
  );
}

export default App;
