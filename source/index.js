// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

const start = (
    <div
        style = { {
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            minHeight:       '100vh',
            backgroundColor: 'slateblue',
            color:           'white',
            fontSize:        24,
            fontWeight:      '600',
        } }>
        Интенсив по React: стартовая точка
    </div>
);

const ellementOne = <h1 title={site}> Helo</h1>

ReactDOM.render(ellementOne, document.getElementById('app'));
