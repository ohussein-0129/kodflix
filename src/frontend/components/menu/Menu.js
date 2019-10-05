import React, { Component } from 'react';
import './Menu.css';
import MenuPanelContent from './menu-panel-content/MenuPanelContent';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panelVisible: false
        }
    }
    render() {
        let classN = this.state.panelVisible ? 'menu-panel menu-panel-show' : 'menu-panel menu-panel-hide';
        return(
            <div className='menu'>
                <div className={this.state.panelVisible ? 'menu-bar menu-bar-open' : 'menu-bar'} onClick={() => {
                    this.setState((preveState) => ({
                        panelVisible: !preveState.panelVisible
                    }));
                    this.props.menuPanelStateChangeRootHandler(!this.state.panelVisible);
                }}>
                    <div className='menu-bar-line'></div>
                    <div className='menu-bar-line'></div>
                    <div className='menu-bar-line'></div>
                </div>
                <div className={classN}>
                    <MenuPanelContent />
                </div>
            </div>
        );
    }
}