//Core
import React, { Component } from 'react';
import moment from 'moment';

// Instuments
// import avatar from '../../theme/assets/homer.png';
import Styles from './style.m.css';

export default class Post extends Component{
    render () {
        const time = moment().format('MMMM D h:mm:ss a');
        const style = {
            width: 'calc(100/4*1%)'
        };
        const { avatar, currentUserFirstName, currentUserLastName  } = this.props;
        return (
            <section className={Styles.post}>
                <span className={Styles.cross}></span>
                <img src={ avatar }/>
                <a>{currentUserFirstName} { currentUserLastName}</a>
                <time>{ time }</time>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
        )
    }
}
