import * as React from "react";

import Table from "react-bootstrap/Table";
import axios from "axios";

import "./styles/ListElements.css";
import {Link} from "react-router-dom";

function ListElements(props: { cat_or_recipe: string; }){
    const [categories, setCategories] = React.useState([]);
    if(!categories.length) {
        let url='';
        if (props.cat_or_recipe==="cat") {
            url = "http://127.0.0.1:8000/api/category/";
        }
        else {
            url = "http://127.0.0.1:8000/api/recipe/?cat=" + props.cat_or_recipe;
        }
        axios.get(url).then(res => {
            setCategories(res.data);
        })
    }

    return (
        <Table striped bordered hover className={"categories"}>
            <tbody>
                {categories.map(category =>
                    <tr key={category['id']}>
                        <td width="320"><img src={category['img']} alt="NO IMAGE" width="300" /></td>
                        <td id="text_td"><Link to={(props.cat_or_recipe==="cat") ? "/category/" + category['id'] : "/recipe/" + category['id']}>{category['name']}</Link> </td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default ListElements