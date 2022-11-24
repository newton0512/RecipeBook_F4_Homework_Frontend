import * as React from "react";
import {useParams} from "react-router-dom";
import ListElements from "./ListElements";
import Element from "./Element";

function Category(){
    const params = useParams();
    if (!params.id || params.id.length === 0) return <p>Нет данных по вашему запросу.</p>
    return (
        <>
            <p><Element cat_or_recipe="cat"/></p>
            <ListElements cat_or_recipe={params.id} />
        </>
    )
}

export default Category