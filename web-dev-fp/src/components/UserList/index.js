import {ListGroup} from "reactstrap";
import React, {useEffect, useState} from "react";
import userService from "../../services/userService";
import {useHistory} from "react-router-dom";

const UserList = () => {
    const history = useHistory();
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        findAllUsers()
    }, [])

    const findAllUsers = () =>
        userService.findAllUsers().then(users => setAllUsers(users))

    return (
        <ListGroup className={"list-group"}>
            <b className="list-group-item text-success">
                Users With This Book In Their Lists
            </b>
            {
                allUsers.map(user => {
                    return (
                        <div onClick={() => history.push('/profile/' + user.username)}
                             className="list-group-item list-group-item-action">
                            <div className="text-primary">@{user.username}</div>
                        </div>
                    );
                })}
        </ListGroup>
    );
}

export default UserList