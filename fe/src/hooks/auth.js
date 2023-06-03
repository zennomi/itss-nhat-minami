import React, {useEffect, useRef, useState} from "react";
import USER from "../services/userService";
import {Navigate} from "react-router-dom";

const Auth = (props) => {
    let role = useRef(ROLE.GUEST);
    const [handle, setHandle] = useState(false);

    useEffect(() => {
        (async () => {
            let result = await USER.me();
            if (result.user_id) {
                role.current = result.role;
            } else {
                role.current = ROLE.GUEST;
            }
            setHandle(true);
        })();
    }, []);

    if (handle === false)
        return (<> </>);
    return (
        <>
            {(props.role === ROLE.GUEST && role.current !== ROLE.GUEST) ?
                <Navigate to={props.path}/> :
                role.current < props.role ?
                    <Navigate to={props.path}/> :
                    props.children
            }
        </>
    )
}
export default Auth;
const ROLE = {
    ADMIN: 2,
    MANAGER: 1,
    USER: 0,
    GUEST: -1
};
export {ROLE};
