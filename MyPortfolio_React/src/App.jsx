import "./App.css"
import myPhoto from "./assets/myPhoto.png"
import DownloadButton from "./components/DownloadButton"

function App() {

  return (
    <div className="container">

      <div className="left-side">
        <img src={myPhoto} />
      </div>

      <div className="right-side">
        <div className="my-name">Yogesh Parihar</div>
        <DownloadButton />
      </div>
  </div>
  )
}

export default App
