import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MovieContainer from "./components/MovieContainer";

// redux 
import { useSelector} from 'react-redux';
import { setContent } from "./features/content/contentData";

function App() {

  // redux to fetch whole movie info
  const contentData = useSelector((state)=> state.content.value)
  console.log(contentData)

  return (
    <>
      <Navbar />
      <Search />

      {/* if there is some data in content than this box will appear */}
      { Object.keys(contentData).length >0 && <MovieContainer /> }
    </>
  );
}

export default App;
