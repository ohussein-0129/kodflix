import React, { Component } from 'react';
import './Menu.css';
import MenuBarSVG from './MenuBarSVG';
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
                    <MenuBarSVG panelVisible={this.state.panelVisible}/>
                </div>
                <div className={classN}>
                    <MenuPanelContent />
                </div>
            </div>
        );
    }
}