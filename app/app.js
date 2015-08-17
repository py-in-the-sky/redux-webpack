import Greeting               from "./greetings_component";
import greetingsStore         from './greetings_store';
import * as GreetingsActions  from './greetings_actions';
import { bindActionCreators } from 'redux';
import { connect, Provider }  from 'react-redux';
import React                  from "react";


// create root of React tree, which'll be mounted in the React.render call
var Root = React.createClass({
    render: function () {
        return (
            <Provider store={greetingsStore}>
                {() => <GreetingApp />}
            </Provider>
        );
    }
});


// construct the 'smart' GreetingApp 'container' around
// the 'dumb' Greeting component
function mapStateToProps (name) {
    return { name: name };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GreetingsActions, dispatch);
}

var GreetingApp = connect(mapStateToProps, mapDispatchToProps)(Greeting);


React.render(<Root />, document.getElementById('root'));
