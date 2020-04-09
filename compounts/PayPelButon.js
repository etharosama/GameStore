import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
          console.log("The payment was succeeded!", payment);
          this.props.onSuccess();
          this.props.history.push('/');
        }
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
        const onError = (err) => {
            console.log("Error!", err);
        }
        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.total;

        const client = {
            sandbox: 'AS3w3YW-nquNRc5z71T0kE02HDLJh1CaAwCKI4g-A_RHPQDzAvviAGgzsGffv88iA9SLjKFhQfM7Lbw_',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn
            env={env}
             client={client}
             currency={currency}
             total={total}
             onError={onError}
             onSuccess={onSuccess}
             onCancel={onCancel} />
        );
    }
}
