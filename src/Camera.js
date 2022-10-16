import './Camera.css';
import ToggleButton from './ToggleButton';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import TvIcon from '@mui/icons-material/Tv';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { observer } from "mobx-react"
import { CAMERA_END, CAMERA_VIEW } from './State';
import { useState } from 'react';

const Camera = observer(({name, sheet}) => {

    const [loading, setLoading] = useState({
        [CAMERA_END.FAR]: false,
        [CAMERA_END.NEAR]: false,
        [CAMERA_VIEW.TOPDOWN]: false,
        [CAMERA_VIEW.SPLIT]: false
    })

    const switchEnd = function(desired_end) {
        if (Object.values(loading).some(v => v)) {
            return
        }
        const desired_view = sheet.View;
        const desired_input = sheet.Inputs[desired_end][desired_view];
        setLoading(currLoading => ({
            ...currLoading,
            [desired_end]: true
        }))
        alert(desired_input);
    }

    const switchView = function(desired_view) {
        if (Object.values(loading).some(v => v)) {
            return
        }
        const desired_end = sheet.End
        const desired_input = sheet.Inputs[desired_end][desired_view];
        setLoading(currLoading => ({
            ...currLoading,
            [desired_view]: true
        }))
        alert(desired_input);
    }

    return <div className="Camera">
        <h1>{name}</h1>
        <div className="Camera-grid">
            <div className="Camera-grid--cell">
                <h2>Camera Select</h2>
                <ToggleButton label="Far End"
                    icon={<NorthIcon sx={{ fontSize: 40 }} />}
                    active={sheet.End === CAMERA_END.FAR}
                    loading={loading[CAMERA_END.FAR]}
                    onClick={() => switchEnd(CAMERA_END.FAR)} />
                <ToggleButton label="Near End"
                    icon={<SouthIcon sx={{ fontSize: 40 }} />}
                    active={sheet.End === CAMERA_END.NEAR}
                    loading={loading[CAMERA_END.NEAR]}
                    onClick={() => switchEnd(CAMERA_END.NEAR)} />
            </div>
            <div className="Camera-grid--cell">
                <h2>TV Layout</h2>
                <ToggleButton label="Top-Down"
                    icon={<TvIcon sx={{ fontSize: 40 }} />}
                    active={sheet.View === CAMERA_VIEW.TOPDOWN}
                    loading={loading[CAMERA_VIEW.TOPDOWN]}
                    onClick={() => switchView(CAMERA_VIEW.TOPDOWN)} />
                <ToggleButton label="Split Screen"
                    icon={<SplitscreenIcon sx={{ fontSize: 40 }} />}
                    active={sheet.View === CAMERA_VIEW.SPLIT}
                    loading={loading[CAMERA_VIEW.SPLIT]}
                    onClick={() => switchView(CAMERA_VIEW.SPLIT)} />
            </div>
        </div>
    </div>;
});

export default Camera;