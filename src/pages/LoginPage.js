import React from 'react';
import {inject, observer} from "mobx-react";

@inject('authStore')
@observer
class LoginPage extends React.Component {

    render() {
        const {user} = this.props.authStore;

        return (
            <div>
                <p>name : {user.name}</p>
                <p>age : {user.age}</p>
            </div>
        );
    }

}

export default LoginPage
