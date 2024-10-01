import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideMenu: React.FC<{}> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize navigate hook

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <aside className={`menu ${isMenuOpen ? 'expanded' : ''}`}>
            <div className="close-menu-button-wrapper">
                <div
                    className={`close-menu-button ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="menu-content">
                <div className="menu-item" onClick={() => navigate("/pokemon")}>
                    <img className="icon" src="http://pngimg.com/uploads/pokeball/pokeball_PNG29.png" alt="Pokemon Icon" />
                    <span className="text">Pokemon</span>
                </div>
                <div className="menu-item">
                    <span className="icon">📧</span>
                    <span className="text">Messages</span>
                </div>
                <div className="menu-item">
                    <span className="icon">⚙️</span>
                    <span className="text">Settings</span>
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;