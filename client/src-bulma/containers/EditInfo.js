import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../actions';
import InputField from '../components/InputField'


class EditInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleInitialize();
    }

    // pre-fill fields with current info
    handleInitialize() {
        if(localStorage.getItem('info')) {
            const {fullname, address, city, country} = JSON.parse(localStorage.getItem('info'));
            const initData = {
                "fullname": fullname,
                "address": address,
                "city": city,
                "country": country
            };

            this.props.initialize(initData);
        }
        
    }

    submit(values) {
        this.props.editInfo(values);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>

                    <Field
                        name="fullname"
                        id="fullname"
                        label="Full Name"
                        component={InputField}
                        type="text" />

                    <Field
                        name="address"
                        value="askh"
                        id="address"
                        label="Address"
                        component={InputField}
                        type="text" />

                    <Field
                        name="city"
                        id="city"
                        label="City"
                        component={InputField}
                        type="text" />

                    <Field
                        name="country"
                        id="country"
                        label="Country"
                        component={InputField}
                        type="text" />

                    <div className="has-text-centered">
                        <button type="submit" className="button is-primary">Submit</button>
                    </div>

            </form>
        )
    }
    
}



export default connect(null, actions)(reduxForm({
    form: 'info'
}, null, actions)(EditInfo));