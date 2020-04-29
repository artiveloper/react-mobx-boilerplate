import React from 'react';
import {Provider} from "mobx-react";
import RootStore from "./stores/RootStore";
import LoginPage from "./pages/LoginPage";

const rootStore = new RootStore();

function App() {
    return (
        <Provider {...rootStore}>
            <div>
                <LoginPage/>
            </div>
        </Provider>
    );
}

export default App;
