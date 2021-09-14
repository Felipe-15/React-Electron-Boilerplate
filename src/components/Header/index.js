import "./styles.css"
import MainLogo from "../../assets/main-logo.svg"

const Header = ({ page }) => {
    return (
        <div className="header">
            <div style={{padding: "0 15px", width: "100%", display: "flex", alignItems: "center", justifyContent: page ? "flex-start" : "space-between"}} className="header-content-container">
                <img className="main-logo" src={MainLogo} />
            </div>
        </div>
    )
}

export default Header