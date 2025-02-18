import React from 'react';

function ProfilesList() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(baseUrl + '/app/profiles');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };


    return(
        <div className={"get-profile-context"}>
            <button className={"btm btm-get"} onClick={fetchData}>Fetch List</button>
            {loading && <p>Loading...</p>}
            <ul className={"profile-list"}>
                <li>
                    <span className={"column"}>Name</span>
                    <span className={"column"}>Surname</span>
                </li>
                {items.map(item => (
                    <li key={item.id}>
                        <span className={"column"}>{item.name}</span>
                        <span className={"column"}>{item.surname}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfilesList;