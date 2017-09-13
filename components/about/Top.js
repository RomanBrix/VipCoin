import React, {Component} from 'react';
import { BG_OPACITY_COIN } from '../../data/links';

export default class Top extends Component {
    render(){
        const { pages } = this.props;
        return(
            <div className="top" style={ {backgroundImage: `url(${BG_OPACITY_COIN})`} }>
                <div className="text">
                    <h1>МЫ НАХОДИМСЯ НА МИССИИ</h1>
                    <p>Мы являемся ведущим в мире программной платформы для цифровых активов. Предлагая большую производственную платформу в мире, мы используем новые технологии для создания принципиально лучшей финансовой системы. Наше программное обеспечение работает  и уполномочены пользователями в 140 странах по всему миру, чтобы вести быстро и без дорогостоящих посредников. Мы также предлагаем инструменты для разработчиков и операционных данных в режиме реального времени для пользователей, чтобы анализировать расцветающую цифровую экономику.</p>
                </div>
            </div>
        )
    }
}
