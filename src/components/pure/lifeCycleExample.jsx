import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente');
    }

    componentWllMount(){
        console.log('WILLMOUNT: antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: justo al montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: despues de actualizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: antes de desaparecer');
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
