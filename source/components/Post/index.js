//Core
import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import Styles from './style.m.css';
import { string } from "prop-types";
import { api } from '../../REST/api';

// Components
import { withProfile } from "../HOC/withProfile";

export class Post extends Component {
    static propTypes = {
        avatar:                 string.isRequired,
        currentUserFirstName:   string.isRequired,
        currentUserLastName:    string.isRequired,
    }

    _deletePostAsync = async () => {
        try {
            const posts = await api.deletePosts();

            console.log(posts);
        } catch ({ message }) {
            console.error(message);
        } finally {

        }
    }

    _getCross = () => {
        const {
        currentUserFirstName,
        currentUserLastName,
        lastName,
        firstName,
        id,
        } = this.props;

        return `${firstName}${lastName}` === `${currentUserFirstName}${currentUserLastName}`
        ? <span
                className = { Styles.cross }
                onClick = { this._deletePostAsync }
            />
        : null;
    }

    render () {
        const {
            avatar,
            currentUserFirstName,
            currentUserLastName,
            lastName,
            firstName,
            created,
            comment } = this.props;

        const cross = this._getCross();

        return (
            <section className = { Styles.post }>
                { cross }
                <img src = { avatar } />
                <a>{ lastName } { firstName }</a>
                <time>{ moment.unix(created).format('MMMM D h:mm:ss a') }</time>
                <p> { comment } </p>
            </section>
        );
    }
};

export default withProfile(Post);
