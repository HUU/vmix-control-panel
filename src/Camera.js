import './Camera.css';
import ToggleButton from './ToggleButton';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import TvIcon from '@mui/icons-material/Tv';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

function Camera(props) {
    return <div class="Camera">
        <h1>{props.name}</h1>
        <div class="Camera-grid">
            <div class="Camera-grid--cell">
                <h2>Camera Select</h2>
                <ToggleButton label="Far End" icon={<NorthIcon sx={{ fontSize: 40 }} />} />
                <ToggleButton label="Near End" icon={<SouthIcon sx={{ fontSize: 40 }} />} />
            </div>
            <div class="Camera-grid--cell">
                <h2>TV Layout</h2>
                <ToggleButton label="Top-Down" icon={<TvIcon sx={{ fontSize: 40 }} />} />
                <ToggleButton label="Split Screen" icon={<SplitscreenIcon sx={{ fontSize: 40 }} />} />
            </div>
        </div>
    </div>;
}

export default Camera;