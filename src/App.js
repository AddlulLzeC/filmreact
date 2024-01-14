import "./App.css"
import NavigationBar from "./component/NavigationBar"
import Intro from "./component/Intro"
import Trending from "./component/Trending"
import Superhero from "./component/Superhero"
import "./style/Landingpage.css"


function App() {
  return (
    <><div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of Trending */}
    </div>
    <div className="superhero">
        <Superhero />
      </div></>

  );
}

export default App;
