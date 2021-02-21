import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliray';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state={
        showSideDrawer : false
    }
    sideDrawerColsedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    togglesideDrawerHandler = () => {
        this.setState( (prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer};
    });
    }

    render(){
        return(    
            //<Aux>
            <React.Fragment>
            <Toolbar drawerToggleClicked={this.togglesideDrawerHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerColsedHandler}/>
            <main className = {classes.Content}>
                {this.props.children}
            </main>
            </React.Fragment>
        )
           //</Aux>)
    }
}

export default Layout;