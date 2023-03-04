import './thing we do.css';

function Thingwedocard(props){
    let url='#';
    var {icon ,text ,phara ,text_btn} = props;
    return(
        <div id='card_import'>
            <div id='box_in_icon'>
                <img src={icon} alt=''/>
            </div>
            <div id='box_in_text'>
                <h3>{text}</h3>
            </div>
            <div id='box_in_phara'>
                <p>{phara}</p>
            </div>
            <div id='box_in_btn'>
                <a href={url}>{text_btn}<img src='/icon/Vec2.png' alt='vector'/></a>
            </div>
        </div>
    );
}

export default Thingwedocard;