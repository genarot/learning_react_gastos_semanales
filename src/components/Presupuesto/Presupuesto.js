import React,{PureComponent} from 'react';

export default class Presupuesto extends PureComponent {

    render() {
        return (
            <div className="alert alert-primary">
                Presupuesto: $ {this.props.presupuesto}
            </div>
        );
    }
}