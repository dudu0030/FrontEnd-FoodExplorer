import { Container } from './styles';
import { Link } from 'react-router-dom';

import { PiPencilSimpleLight } from "react-icons/pi"; 

export function Dish({ data, ...rest }) {
    return (
        <Container {...rest}>
            <Link to="/editdish">
                <PiPencilSimpleLight />  
            </Link>
            <img src={data.image} />
            <h2>{data.name}</h2>
            <h3>{data.description}</h3>
            <span>{data.price}</span>
        </Container>
    );
}