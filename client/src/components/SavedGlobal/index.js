import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import SavedGallery from '../SavedGallery';
import Title from "../Title";


class SavedGlobal extends Component {
    state = {
        items: [],
        promiseIsResolved: false
    };

    loadSaved() {

    }
    render() {
        return (
            <div className="global">
                <Title />
                <SavedGallery items={this.state.items} />
            </div>)
    }
}

export default SavedGlobal