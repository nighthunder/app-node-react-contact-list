import React from "react";
import { TextField, Button } from '@material-ui/core';
import '../pages/ViewContacts/styles.css';

const ReadOnlyRow = ({contact, handleEditClick}) =>{

    return (
        <tr>
            <td>#</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.address}</td>
            <td className="closeIcon"><Button variant="contained" color="primary" onClick={(event) => handleEditClick(event, contact)}>Editar</Button></td>{/* Colocaria um icon from react mui */}
            <td className="closeIcon">X</td> {/* Colocaria um icon from react mui */}
        </tr>

    );       

}

export default ReadOnlyRow;