import React from 'react'
import './item-list.css'
import DetailsMovie from '../../components/buttons/details-movie';
const { default: DeleteMovie } = require("../../components/buttons/delete");
const { default: UpdateMovie } = require("../../components/buttons/update");


const ItemList = ({data}) => {
    let count = 1;
    const dataFromProps = data.data;

    return dataFromProps.map((item) => {
        const id = item._id
        return (
                <tr key={id} className="movies-list">
                    <th scope="row">{count++}</th>
                    <td>{item.name}</td>
                    <td className="buttons"><span ><UpdateMovie id={id} /></span><span><DeleteMovie id={id}/></span><span><DetailsMovie id={id}/></span></td>
                </tr>
    
        )
    })
}

export default ItemList