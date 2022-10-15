import crest from './crest.png';
import './Sidebar.css';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';

function Sidebar() {
  return (
    <header className="Sidebar">
      <img src={crest} className="Sidebar-logo" alt="Blackhawk Curling Club" />
      <button className="Sidebar-button">
        <VideocamRoundedIcon />
        <p>
            Stream
        </p>
    </button>
    </header>
  );
}

export default Sidebar;
