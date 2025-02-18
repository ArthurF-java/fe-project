import React from "react";
// import ProfilesList from "./ProfilesList";

function Cache() {
    const [formData, setFormData] = React.useState({
        key: '',
        value: '',
        ttl: '10'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8090/app/cache', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        setFormData({
            key: '',
            value: '',
            ttl: '10'
        })
    }

    return (
        <div className={"profile-context"}>
            <div className={"save-cache-context"}>
                <h3>CACHE</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Key:
                        <input
                            type="text"
                            name="key"
                            value={formData.key}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Value:
                        <input
                            type="text"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        TTL(seconds):
                        <input
                            type="text"
                            name="ttl"
                            value={formData.ttl}
                            onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <button className={"btm btm-save"} disabled={!(formData.key && formData.value && formData.ttl)}
                            type="submit">Save in cache
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Cache;