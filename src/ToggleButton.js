import './ToggleButton.css';

function ToggleButton(props) {
    return <button className="ToggleButton">
        {props.icon}
        <p>{props.label}</p>
    </button>;
}

export default ToggleButton;