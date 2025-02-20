import './App.css';
import './index.scss';
import Profile from "./Profile";
import Cache from "./Cache";
import React from "react";

function App() {

    const [version, setVersion] = React.useState('')
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const frontVersion = "4.0.1";

    React.useEffect(() => {
        fetch(baseUrl +'/app/version')
            .then(res => res.json())
            .then(json => {
                setVersion(json.version)
            })

    }, [])

    return (
        <div className={"wrapper"}>
            <h1>React app</h1>
            <h3>Backend version: {version}. Frontend version: {frontVersion}</h3>
            <div className={"context"}>
                <Profile/>
                <Cache/>
            </div>
        </div>
    );
}

export default App;
