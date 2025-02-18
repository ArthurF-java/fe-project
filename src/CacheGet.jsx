import React from "react";

function CacheGet() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [key, setKey] = React.useState('');
    const [result, setResult] = React.useState({
    key: '',
    value: ''});

    const handleChange = (e) => {
        setKey(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(baseUrl + '/app/cache?key=' + key)
        .then(res => res.json()).then(json => {
        setResult(json)})
        setKey('')
    }

    return (
        <div className={"get-cache-context"}>
            <div className={"save-cache-context"}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Key:
                        <input
                            type="text"
                            name="key"
                            value={key}
                            onChange={handleChange}
                        />
                    </label>
                    <button className={"btm btm-get"} disabled={!(key)}
                            type="submit">Get by key
                    </button>
                </form>

            </div>
            <br/>
            <div className={"cache-result"}>
            <h3>Result: {result.value}</h3>
            </div>
        </div>
    );
}

export default CacheGet;