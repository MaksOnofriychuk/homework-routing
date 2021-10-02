import React, { useState, useEffect } from "react";
import api from "../../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Quality from "../quality";

const OneUserId = ({ match }) => {
    const userId = match.params.usersId;
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(async () => {
        const res = await api.users.getById(userId);
        setUser(res);
    }, []);

    const handleBack = () => {
        history.push("/allUsers");
    };

    if (!user) return <h1>Loading</h1>;

    const { name, qualities, profession, completedMeetings, rate } = user;
    return (
        <>
            <h1>{name}</h1>
            <h2>{`Професия: ${profession.name}`}</h2>
            <p>
                {qualities.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </p>
            <p>{`completedMeetings: ${completedMeetings}`}</p>
            <h2>{`Rate: ${rate}`} /5</h2>
            <button onClick={() => handleBack()}>
                Все Пользователи
            </button>
        </>
    );
};
OneUserId.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
};
export default OneUserId;
