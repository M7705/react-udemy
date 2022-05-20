import React, {useContext} from "react";
import { InputContext } from './App';


function ItemList(props) {
const myContext = useContext(InputContext);

    return (
        <>
{ myContext.array.map((value, index) => <li onClick={props.pListClick} id = {index}>{value}</li>)}
</>
)
}

export default ItemList;