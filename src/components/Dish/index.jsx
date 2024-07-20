import { Container } from './styles';

import { PiPencilSimpleLight } from "react-icons/pi"; 

export function Dish({ data, ...rest }) {
    return (
        <Container {...rest}>
           {/*por motivos de falta de intelecto deste dev o ícone é apenas visual*/}
            <PiPencilSimpleLight />  
            <img src={data.image} />
            <h2>{data.name}</h2>
            <h3>{data.description}</h3>
            <span>{data.price}</span>
        </Container>
    );
}