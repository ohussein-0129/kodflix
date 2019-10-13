import React, { Component } from 'react';
import './Play.css';

export default class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_id: null,
            error: false
        }
    }

    componentDidMount() {
        fetch(`/rest/single/${this.props.match.params.showId}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                this.setState({video_id: json.video_id});
            })
            .catch(() => {
                this.setState({error: true});
            })
    }

    render() {
        return(
                <iframe title={this.state.video_id} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788" height="443" type="text/html" src={`https://www.youtube.com/embed/${this.state.video_id}?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com`}></iframe>
            
        );
    }
}