import './CameraControls.css';
import Camera from './Camera';

function CameraControls() {
    return <div className="CameraControls">
        <Camera name="Sheet 1" />
        <Camera name="Sheet 2" />
        <Camera name="Sheet 3" />
    </div>;
}

export default CameraControls;