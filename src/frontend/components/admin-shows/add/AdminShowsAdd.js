import React, { Component } from 'react';
import './AdminShowsAdd.css';
import update from 'immutability-helper';

export default class AdminShowsAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
                synopsis: '',
                videoId: '',
                imageUrl: ''
            }
        };
    }

    handleChange({target: {name, value}}) {
        this.setState((prevState) => ({
            values: update(prevState.values, {
                [name]: {$set: value}
            })
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        let empty = Object.values(this.state.values)
            .reduce((empty, value) => empty || !value, false);
        if(!empty) {
            let formData = new FormData();
            Object.keys(this.state.values)
                .forEach(key => formData.append(key, this.state.values[key]));
            fetch('/rest/tv-shows/add', {method: 'POST', body: formData})
                .then((res) => res.json())
                .then(json => console.log(json))
        }
    }
    
    render() {
        return(
            <div className='admin-tv-shows-add'>
                <form>
                    <div>
                        <label>Name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Title of Show'
                            value={this.state.values.name}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Cover Link</label>
                        <input
                            type='text'
                            name='imageUrl'
                            placeholder='Image URL'
                            value={this.state.values.imageUrl}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Youtube Video ID</label>
                        <input
                            type='text'
                            name='videoId'
                            placeholder='Video ID'
                            value={this.state.values.videoId}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Synopsis</label>
                        <textarea
                            type='text'
                            name='synopsis'
                            value={this.state.values.synopsis}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <button onClick={(e) => this.handleSubmit(e)}>Add Show</button>
                </form>
            </div>
        );
    }
}