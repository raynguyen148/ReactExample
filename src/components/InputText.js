import React, { Component, PropTypes } from 'react';

class InputText extends Component {
    // static defaultProps = {
    //     prop1: 'Default prop'
    // };

    // static propTypes = {
    //     defaultImage: PropTypes.string
    // };

    constructor(props){
        super(props);
        this.state = { text: '' };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.warn(e.target.value);
        this.setState({text: e.target.value})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.someValue !== this.props.someValue){
          this.setState({text: 'New Props' });
        }

        console.warn('componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.warn('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.warn('componentWillUpdate');
    }

    componentDidUpdate() {
        console.warn('componentDidUpdate');
    }

    componentWillMount() {
        console.warn('componentWillMount');
    }

    componentDidMount() {
        console.warn('componentDidMount');
    }
    
    render() {
        console.warn('render')
        return (
            <div>
                <h5>{this.state.text}</h5>
                <p>Prop: {this.props.prop1}</p>
                <input onChange={this.onChange} />
            </div>
        );
    }
}

export default InputText;