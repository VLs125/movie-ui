import React, { useContext } from 'react'

import { Context } from '../../context/Context.js';
const { default: DeleteMovie } = require("../../components/Buttons/delete");
const { default: UpdateMovie } = require("../../components/Buttons/update");


const ItemList = () => {

    const {data} = useContext(Context)

    let count = 1;
    return data.map((item) => {
        const id = item._id
        
        return (
            <Context.Provider value={{id}}>
        <tr key={id} className="movies-list">
            <th scope="row">{count++}</th>
            <td>{item.name}</td>
            <td>{item.rating}</td>
            <td>{item.time.map((item)=>item+"  /")}</td>
            <td><span><UpdateMovie /></span><span><DeleteMovie /></span></td>
        </tr>
        </Context.Provider>
    )})
}

export default ItemList