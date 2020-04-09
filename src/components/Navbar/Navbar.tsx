import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';

import Zach from './Zach/Zach';

type Props = {
    toggleTheme: () => void,
    theme: string
}

export default class Navbar extends React.Component<Props, {}> {
    constructor(props: Props){
        super(props)

    }

    handleChange(event: any) {
        this.setState({ ...this.state, [event.target.name]: event.target.checked})
        this.props.toggleTheme()
    }

    render(){
        return (
            <div>
                <AppBar position="static" style={this.props.theme === 'light' ? {backgroundColor: '#333'} : {backgroundColor: '#d4d9d6'}}>
                    <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" style={this.props.theme === 'light' ? {color: 'white'} : {color: '#333'}}>
                        <MenuIcon />
                    </IconButton>
                    <Zach theme={this.props.theme}/>
                    <Switch
                    color="default"
                    onChange={(e) => this.handleChange(e)}
                    inputProps={{ 'aria-label': 'checkbox with default color' }} />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}