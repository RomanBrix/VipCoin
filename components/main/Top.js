import React, {Component} from 'react';
import $ from 'jquery';
import topCss from "../../css/scss/main/Top.scss";
import { MAIN_TOP_VIDEO, BG_OPACITY_COIN } from '../../data/links';

export default class Top extends Component {
    getCookie(name){
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1])  : undefined;
    }

    render(){
        const { pages, toggleAuth } = this.props;
        const user = this.getCookie("user");
        return(
            <div className="top" style={ {backgroundImage: `url(${BG_OPACITY_COIN})`} }>
                    <div className="text">
                        <h1>{pages.head}</h1>
                        <h3>{pages.afterHead}</h3>
                        <p>{pages.text}</p>
                        <div className="btn-buy"  onClick={()=>{
                            if(user === undefined || user.length < 15){
                                toggleAuth(true);
                            } else{
                                window.location.href = 'profile/me.html';
                            }
                        }}>{ pages.btn }</div>
                        <div className="play" onClick={()=>{
                            document.body.style.overflow = "hidden";

                            $(document).ready(function(){
                              $('#fullVideo').fadeIn(300).css('display', 'flex');
                            })

                        }}>
                            {/* icon-play-circle */}
                            <i className="icon-play"/>
                        </div>


                        <div  className="nextStage" onClick={()=>{
                            $(document).ready(function(){
                                const topPos = $("#nextStage").offset().top;
                                $('body,html').animate({scrollTop: topPos}, 1200);
                            });
                        }}>
                            <i className="icon-angle-double-right"/>
                        </div>
                    </div>
                    <div id="fullVideo" onClick={()=>{
                        document.body.style.overflow = "auto";
                        $(document).ready(function(){
                            $('#fullVideo').fadeOut(500);
                        })
                    }}>
                        <div className="video-container">
                            <div className="video-close" onClick={()=>{
                                document.body.style.overflow = "auto";
                                $(document).ready(function(){
                                    $('#fullVideo').fadeOut(500);
                                })
                            }}>
                                <i className="icon-close-round"/>
                            </div>
                            <iframe width="100%" height="100%" src={MAIN_TOP_VIDEO} frameBorder="0" allowFullScreen/>
                        </div>
                    </div>
                    <div className="video">
                    </div>

            </div>
        )
    }
}
