import downloadIcon from "../assets/downloadIcon.gif"
import "./DownloadButton.css"

function DownloadButton(){
    return (
        <div class="parent-download">
          <div class="ButtonBg">
            <div class="DownloadIcon">
              <img src={downloadIcon} alt="Download icon" />
            </div>
    
            <div class="downloadText">Download Resume</div>
          </div>
        </div>
    )
}
export default DownloadButton