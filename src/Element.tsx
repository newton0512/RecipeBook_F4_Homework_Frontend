import * as React from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./styles/Element.css";
import {useParams} from "react-router-dom";

function Element(props: { cat_or_recipe: string; }){
    const [elementRB, setElementRB] = React.useState(null);
    const params = useParams();
    let id_element='';
    if (!params.id || params.id.length === 0) return <p>Нет данных по вашему запросу.</p>
    else id_element=params.id
    if(elementRB === null) {
        let url='';
        if (props.cat_or_recipe==="cat") {
            url = "http://127.0.0.1:8000/api/category/" + id_element;
        }
        else {
            url = "http://127.0.0.1:8000/api/recipe/" + id_element;
        }
        axios.get(url).then(res => {
            setElementRB(res.data);
        })
    }

    if (elementRB === null) return <p>Нет данных по вашему запросу.</p>
    else
    return (
        <Container>
            <Row>
                <Col><h1>{elementRB['name']}</h1></Col>
            </Row>
            <Row>
                <Col sm={5}><img src={elementRB['img']} alt="NO IMAGE" /></Col>
                <Col sm={7}>{elementRB['content']}</Col>
            </Row>
        </Container>
    )
}

export default Element