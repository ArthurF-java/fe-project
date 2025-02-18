import React from 'react';
import ProfilesList from "./ProfilesList";

function Profiles() {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const [formData, setFormData] = React.useState({
        name: '',
        surname: ''
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
        fetch(baseUrl + '/app/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        setFormData({
            name: '',
            surname: ''
        })
    }

    const deleteAll = () => {
        fetch(baseUrl + '/app/profiles', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }})
    }

    return (
        <div className={"profile-context"}>
            <div className={"save-profile-context"}>
                <h3>PROFILE</h3>
                <button onClick={deleteAll} className={"btm btm-delete"}>Delete Profiles</button>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Surname:
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <button className={"btm btm-save"} disabled={!(formData.name && formData.surname)} type="submit">Save Profile</button>
                </form>
            </div>
            <ProfilesList/>
        </div>

    );

}

export default Profiles;