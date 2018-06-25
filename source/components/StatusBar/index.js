//Core
import React, { Component } from 'react';
import cs from 'classnames';

// Instruments
import Styles from './styles.m.css';
import {withProfile} from "../HOC/withProfile";
import {Composer} from "../Composer";


// Components


export class StatusBar extends Component {
    render () {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;

        const status = cs({
            [Styles.status]:  true,
            [Styles.offline]: true,
        });

        return (
            <section className = { Styles.statusBar }>
                <div className = { status }>
                    <div>Offline</div>
                    <span />
                </div>
                <button>
                    <img src = { avatar } />
                    <span>{ currentUserFirstName }</span>
                    &nbsp;
                    <span>{ currentUserLastName }</span>
                </button>
            </section>
        );
    }
};

export default withProfile(StatusBar);