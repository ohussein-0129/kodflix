import React from 'react';
import { Link } from 'react-router-dom'
import './MenuPanelContent.css';
import MenuList from './MenuPanelContentList';

export default () => (
    <div className='menu-panel-content'>
        {
            MenuList.map(option => (
                <Link to={'/'} className='manage-tvshows-option'>
                    <img src={option.icon} alt='television icon' />
                    <div className='manage-tvshows-option-text'><h2>{option.name}</h2></div>
                </Link>
            ))
        }
    </div>
);