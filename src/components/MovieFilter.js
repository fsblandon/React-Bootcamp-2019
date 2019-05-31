import React from 'react';

const API_KEY = '06ced2305eaef2fd6deb916ee2da825f';
const axios = require('axios');

class MovieFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: '',
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    componentDidMount() {
    }

    render() {
        return <form onSubmit={this.handleSubmit} className='filter'>
                <input  value={this.state.element}
                        type='text'
                        name='element'
                        placeholder='Buscar Pelicula'
                        onChange={this.handleChange}/>
                <input  type='submit'
                        value='Buscar'/>
        </form>
    }
}

export default MovieFilter