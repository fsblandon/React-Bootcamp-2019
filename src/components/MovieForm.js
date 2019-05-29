import React from 'react';

class MovieForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            year: '',
            image: '',
            genre: '',
            overview: ''
        };
        this.yearRef = React.createRef();
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
        console.log(this.yearRef.current);
        //window.document.getElementById('movieID').value = '2030';
    }

    render() {
        //primer forma
        return <form    onSubmit={this.handleSubmit} 
                        className="form">
            <input value={this.state.id}
                type='text'
                name='id'
                placeholder='ID'
                onChange={this.handleChange} />
            <input value={this.state.title} 
                type='text'
                name='title'
                placeholder='Title'
                onChange={this.handleChange} />
            <input value={this.state.year}
                type='text'
                name='year'
                ref={this.yearRef}
                placeholder='Year'
                onChange={this.handleChange} />
            <input value={this.state.image}
                type='text'
                name='image'
                placeholder='Image'
                onChange={this.handleChange} />
            <input value={this.state.genre}
                type='text'
                name='genre'
                placeholder='Genre'
                onChange={this.handleChange} />
            <input value={this.state.overview}
                type='text'
                name='overview'
                placeholder='Overview'
                onChange={this.handleChange} />
            <input type='submit'
                    value='Save'/>
        </form>
    }
}

export default MovieForm