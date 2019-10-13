import React from 'react';
import { Link } from 'react-router-dom';
import './AdminShowsList.css';

export default function AdminShowsList() {
    const adminOperations = [
        {name: 'Add', uri: '/add'},
        {name: 'Edit', uri: '/edit'}
    ];
    const uri='/admin/tv-shows';
    return(
        <>
            <div className='admin-tv-shows-list'>
                <div className='admin-tv-shows-list-items'>
                    {
                        adminOperations.map(operation => (
                            <div key={`admin-tv-shows-list-item-${operation.name}`} className='admin-tv-shows-list-item'>
                                <Link to={`${uri}${operation.uri}`}>{ operation.name }</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}