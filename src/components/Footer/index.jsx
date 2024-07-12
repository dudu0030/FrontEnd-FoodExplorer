import { BiSolidPolygon } from "react-icons/bi";
import { Container, Logo, Sub } from './styles';

export function Footer() {
    return (
        <Container>
            <Logo>
            <BiSolidPolygon />
                <div>
                    <span>food explorer</span>
                </div>
            </Logo>

            <Sub>
                <div>
                    <span>© 2023 - Todos os direitos reservados.</span>
                </div>
            </Sub>
        </Container>
    )
}