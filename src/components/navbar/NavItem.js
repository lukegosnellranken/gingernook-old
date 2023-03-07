import React from "react";

function NavItem(props) {
    return (
        <li className="nav-list-item"><a href={props.href}>{props.name}</a></li>
    )
}

export default NavItem;