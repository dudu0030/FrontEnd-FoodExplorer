import { LuLogOut } from "react-icons/lu";
import { BiSolidPolygon } from "react-icons/bi";
import { Container, Logo, Logout } from './styles';


export function Header() {
    return (
        <Container>
            <Logo>
            <BiSolidPolygon />
                <div>
                    <span>food explorer</span>
                </div>
            </Logo>
            <Logout>
                <LuLogOut />
            </Logout>
        </Container>
    )
}