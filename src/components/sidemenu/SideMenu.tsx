import { useState } from "react";

const SideMenu: React.FC<{}> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <div className="menu-item">
                    <img className="icon" src="http://pngimg.com/uploads/pokeball/pokeball_PNG29.png" />
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
