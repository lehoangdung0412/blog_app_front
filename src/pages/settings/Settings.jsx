import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import background from "../../media/images/background.jpg"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account <i class="far fa-trash-alt"></i></span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={background} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-secret"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Vincent" />
                    <label>Email</label>
                    <input type="email" placeholder="vincent@gmail.com" />
                    <label>Password</label>
                    <input type="password" placeholder="Should have at least 6 characters" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
