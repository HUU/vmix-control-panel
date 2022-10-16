import './CameraControls.css';
import Camera from './Camera';
import { Sheets } from './State';

function CameraControls() {
    return <div className="CameraControls">
        <Camera name="Sheet 1" sheet={Sheets[1]} />
        <Camera name="Sheet 2" sheet={Sheets[2]} />
        <Camera name="Sheet 3" sheet={Sheets[3]} />
    </div>;
}

export default CameraControls;