import {ListGroup} from "reactstrap";
import React, {useEffect, useState} from "react";
import userService from "../../services/userService";
import {useHistory} from "react-router-dom";

const UserList = ({list, listType}) => {
    const history = useHistory();

    function refreshPage() {
        window.location.reload(false);
    }

    if (typeof list === 'undefined') {
        list = []
    }

    return (
        <ListGroup className={"list-group"}>
            <b className="list-group-item text-success">
                {listType}
            </b>
            {
                list.map(user => {
                    return (
                        <div onClick={() => {
                            {
                                history.push('/profile/' + user)
                            }
                            {
                                refreshPage()
                            }
                        }}
                             className="list-group-item list-group-item-action">
                            <div className="text-primary">@{user}</div>
                        </div>
                    );
                })}
        </ListGroup>
    );
}

export default UserList