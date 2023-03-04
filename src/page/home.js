
import './home.css';
import { Link } from "react-router-dom";
import React from 'react';
import Thingwedocard from '../component/thing we do';
import Ourinitatives from '../component/our initatives';
import Event from '../component/event';


function Home(){
    return(
        <div id='index_home'>
            <div id='main_bg'>
                <img src ='/img/main bg.png' alt='main_bg'/>
            </div>
            <div id='content1'>
                <div id='main_text'>
                    <h2>HACK CLUB CUCEK</h2>
                </div>
                <div id='main_p'>
                    <div id='box_p'>
                        <p>A nonprofit network of high school coding clubs and makers around the world, for the students, by the students.</p>
                    </div>
                </div>
                <div id='Our_vision_btn'>
                    <div id='box_our_vision_btn'>
                        <Link to='project'>Our Vision<img src='/icon/Vector.png' alt='vecter'/></Link>
                    </div>
                </div>
            </div>
            <div id='Thing_we_do'>
                <div id='box_twd'>
                    <div id='box_twd_text'>
                        <h2>Thing we do</h2>
                        <div id='underline_thing_we_do'></div>
                    </div>
                    <div id='card_list'>
                        <div id='network_card'>
                            <Thingwedocard icon='/icon/twd_heart.png' text='Networking' phara='Bibendum etiam nec massa ok ok
                                            bendum etiam nec massa ok ok posuere neque diam. Mattis molestie feugiat nisi.'
                                                text_btn='read more'
                                            />
                        </div>
                        <div id='skill_enhancement_card'>
                            <Thingwedocard icon='/icon/twd_flag.png' text='Skill Enhancement' phara='Pellentesque iaculis erat molestie
                                            bendum etiam nec massa ok ok proin consectetur dignissim cc nisi, lacus.'
                                                text_btn='read more'
                                            />
                        </div>
                        <div id='development_card'>
                            <Thingwedocard icon='/icon/twd_chip.png' text='Development' phara='Suspendisse libero amet, pharetr
                                            spendisse libero amet, pharetr Posuere sem ullamcol ok id at okok lobortis.'
                                                text_btn='read more'
                                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id='our_initatives'>
                <div id='box_our_initatives_text'>
                    <h2>Our Initatives</h2>
                    <div id='underline_our_initatives'></div>
                </div>
                <div id='box_our_initatives'>
                    <div id='content'>
                        <Ourinitatives select_form= {1} img='/img/ol_robot.png' headTopic='Id vel varius mauris morbi quis'
                            phara='In dignissim ut tortor quam. In et convallis suspendisse vel. Urna, ante ut mauris, dolor interdum libero, proin accumsan, vitae. In risus sit convallis volutpat.'
                            list='  Eget diam purus' list2='a massaAnte ut mauris' list3='dolor interdumProin accumsan' text_btn='Live Demo'/>
                    </div>
                    <div id='content2'>
                        <Ourinitatives select_form= {2} img='/img/ol_mobile.png' headTopic='Id vel varius mauris morbi quis'
                            phara='In dignissim ut tortor quam. In et convallis suspendisse vel. Urna, ante ut mauris, dolor interdum libero, proin accumsan, vitae. In risus sit convallis volutpat.'
                            list='  Eget diam purus' list2='a massaAnte ut mauris' list3='dolor interdumProin accumsan' text_btn='Live Demo'/>
                    </div>
                    <div id='content3'>
                        <Ourinitatives select_form= {1} img='/img/ol_human.png' headTopic='Id vel varius mauris morbi quis'
                            phara='In dignissim ut tortor quam. In et convallis suspendisse vel. Urna, ante ut mauris, dolor interdum libero, proin accumsan, vitae. In risus sit convallis volutpat.'
                            list='  Eget diam purus' list2='a massaAnte ut mauris' list3='dolor interdumProin accumsan' text_btn='Live Demo'/>
                    </div>
                </div>
            </div>
            <div id='events'>
                <div id='box_event_text'>
                    <h2>Event</h2>
                    <div id='underline_event'></div>
                </div>
                <div id='box_event'>
                    <div id='box_event1'>
                        <Event img='/img/event1.png' head_topic='Google I/O 2021' date='September 1st Week' phara='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. 
                        Malesuada amet nisi libero, urna tristique aliquam.' btn_text='Know More'/>
                    </div>
                    <div id='box_event2'>
                        <Event img='/img/event2.png' head_topic='Google I/O 2021' date='September 1st Week' phara='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. 
                        Malesuada amet nisi libero, urna tristique aliquam.' btn_text='Know More'/>
                    </div>
                    <div id='box_event3'>
                        <Event img='/img/event3.png' head_topic='Google I/O 2021' date='September 1st Week' phara='Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est, mattis urna. 
                        Malesuada amet nisi libero, urna tristique aliquam.' btn_text='Know More'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;