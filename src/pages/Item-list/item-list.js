import React, {useContext} from 'react'
import './item-list.css'
import { Context } from '../../context/Context.js';
import DetailsMovie from '../../components/Buttons/details-movie';
const { default: DeleteMovie } = require("../../components/Buttons/delete");
const { default: UpdateMovie } = require("../../components/Buttons/update");


const ItemList = () => {
    const { data } = useContext(Context)




    let count = 1;
    return data.map((item) => {
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