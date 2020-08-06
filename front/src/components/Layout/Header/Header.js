import React from 'react';
import Headline from "./Headline";
import { connect } from "react-redux";

import Navbar from "./Navbar";


const Header = ({auth:{admin, lawyer} }) => {

   
    return (
        <div>
            <Headline />
            {admin || lawyer ? '' : <Navbar />}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Header);
