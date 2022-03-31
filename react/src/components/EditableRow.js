import React from "react";
import '../pages/ViewContacts/styles.css';
import { TextField, Button } from '@material-ui/core';
const EditableRow = ({contact, editFormData, handleEditFormChange, handleDeleteClick}) =>{

    return (
        <tr>
            <td>#</td>
            <td><TextField name="name" placeholder="Digite um nome.." required value={editFormData.name} onChange={handleEditFormChange}></TextField></td>
            <td><TextField name="email" placeholder="Digite um email.." required value={editFormData.email} onChange={handleEditFormChange}></TextField></td>
            <td><TextField name="phone" placeholder="Digite um phone.." required value={editFormData.phone} onChange={handleEditFormChange}> </TextField></td>
            <td><TextField name="address" placeholder="Digite um endereço.." required value={editFormData.address} onChange={handleEditFormChange}></TextField></td>
            <td><Button type="submit" variant="contained" color="primary" className="btn closeIcon">Salvar</Button></td>{/* Colocaria um icon from react mui */}
            <td className="closeIcon"><Button variant="contained" color="primary" className="btn btnClose" onClick={() => handleDeleteClick(contact.id)}>X</Button></td> {/* Colocaria um icon from react mui */}
        </tr>

    );       

}

export default EditableRow;