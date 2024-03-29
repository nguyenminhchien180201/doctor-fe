import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from "react-intl";
//HomeFooter
class HomeFooter extends Component {
    render() {
        return (
            <div className="section-share section-about home-footer">
                <p>&copy; 2022 Hello Minh Chien. <a href='#'>More information, i am Chien</a></p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);