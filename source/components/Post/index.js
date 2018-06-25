//Core
import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import Styles from './style.m.css';
import { string } from "prop-types";

// Components
import { withProfile } from "../HOC/withProfile";

export class Post extends Component {
    static propTypes = {
        avatar:                 string.isRequired,
        currentUserFirstName:   string.isRequired,
        currentUserLastName:    string.isRequired,
    }

    render () {
        const time = moment().format('MMMM D h:mm:ss a');

        const {
            avatar,
            currentUserFirstName,
            currentUserLastName,
            comment } = this.props;

        return (
            <section className = { Styles.post }>
                <span className = { Styles.cross }></span>
                <img src = { avatar } />
                <a>{ currentUserFirstName } { currentUserLastName }</a>
                <time>{ time }</time>
                <p> { comment } </p>
            </section>
        );
    }
};

export default withProfile(Post);
