import React from 'react';


export default React.createClass({
    propTypes: {
        name:            React.PropTypes.string.isRequired,
        changeAddressee: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
          <div className="greeting">
            <h3>
                Hiya, {this.props.name}!
            </h3>
            <button onClick={this.props.changeAddressee}>
                Change Adressee
            </button>
          </div>
        );
    },
});
