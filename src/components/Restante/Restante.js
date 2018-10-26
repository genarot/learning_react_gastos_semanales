import React,{PureComponent} from 'react';
import {revisarPresupuesto} from '../../assets/helpers';


export default class Restante extends PureComponent {

    render() {
        return (
            <div className={revisarPresupuesto( this.props.presupuesto, this.props.restante )}>
                Restante: $ {this.props.restante}
            </div>
        );
    }
}