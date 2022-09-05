import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    // const [darkMode, setDarkMode] = useDarkMode();


    return (
        <header className="flex-none w-full bg-gray-800 border-b border-solid border-[#374151] h-16">   
        <div className="flex justify-between  items-center mr-10">

            Header
            {/* <ToggleSwitch
                label="Dark mode"
                name="darkmode"
                onChange={() => setDarkMode(!darkMode)}
                value={darkMode}
                textColour="white"
            /> */}

        </div>
        </header>
    );
};

export default Header;
