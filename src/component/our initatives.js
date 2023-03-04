import './our initatives.css';

function Ourinitatives(props){
    var {select_form ,img ,headTopic ,phara ,list ,list2 ,list3 ,text_btn} = props;
    var url ='#';
    if(select_form === 1){
        return(
            <div id='box_content1'>
                <div id='left_content1'>
                    <img src={img} alt=''/>
                </div>
                <div id='right_content1'>
                    <div id='box_head1'>
                        <h3>{headTopic}</h3>
                    </div>
                    <div id='box_phara1'>
                        <p>{phara}</p>
                    </div>
                    <div id='box_list1'>
                        <ul>
                            <li>{list}</li>
                            <li>{list2}</li>
                            <li>{list3}</li>
                        </ul>
                    </div>
                    <div id='box_btn1'>
                        <div id='live_demo_btn1'>
                            <a href={url}>{text_btn}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if(select_form === 2){
        return(
            <div id='box_content2'>
                <div id='left_content2'>
                    <div id='box_head2'>
                        <h3>{headTopic}</h3>
                    </div>
                    <div id='box_phara2'>
                        <p>{phara}</p>
                    </div>
                    <div id='box_list2'>
                        <ul>
                            <li>{list}</li>
                            <li>{list2}</li>
                            <li>{list3}</li>
                        </ul>
                    </div>
                    <div id='box_btn2'>
                        <div id='live_demo_btn2'>
                            <a href={url}>{text_btn}</a>
                        </div>
                    </div>
                </div>
                <div id='right_content2'>
                    <img src={img} alt=''/>
                </div>
            </div>
        );
    }
}


export default Ourinitatives;