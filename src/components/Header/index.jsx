import { LuLogOut } from "react-icons/lu";
import { BiSolidPolygon } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";
import { Container, Logo, Logout, Search, NewDish } from './styles';


export function Header() {
    return (
        <Container>
            <Logo>
            <BiSolidPolygon />
                <div>
                    <span>food explorer</span>
                    <p>admin</p>
                </div>
                
                
            </Logo>
            <Search>
                    <div>
                        <TfiSearch />
                        <input class="search-input" type="text" placeholder="Busque por pratos ou ingredientes" />
                    </div>
                </Search>
            <NewDish>
                Novo prato
            </NewDish>
            <Logout>
                <LuLogOut />
            </Logout>
        </Container>
    );
}