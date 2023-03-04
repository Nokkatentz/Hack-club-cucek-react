import './event.css'

function Event(props){
    var{img ,head_topic ,date ,phara ,btn_text} = props;
    var url ='#';
    return (
        <div id='box_event_items'>
            <div id='box_img'>
                <img src={img} alt=''/>
            </div>
            <div id='box_topic_and_date'>
                <div id='topic_text'>
                    <h2>{head_topic}</h2>
                </div>
                <div id='date'>
                    <p>{date}</p>
                </div>
                <div id='box_phara'>
                    <p>{phara}</p>
                </div>
                <div id='box_know_more_btn'>
                    <div id='in_know_more_btn'>
                        <a href={url}>{btn_text}<img src='/icon/vec2.png' alt=''/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Event;