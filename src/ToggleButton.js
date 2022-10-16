import { CircularProgress } from '@mui/material';
import './ToggleButton.css';

function ToggleButton(props) {

    let buttonContent = <div>
        {props.icon}
        <p>{props.label}</p>
    </div>

    if (props.loading) {
        buttonContent = <CircularProgress style={{'color': 'white'}} />
    }

    return <button className={`ToggleButton ${props.loading ? 'loading' : ''} ${props.active && !props.loading ? 'active' : ''}`} onClick={props.onClick}>
        {buttonContent}
    </button>;
}

export default ToggleButton;