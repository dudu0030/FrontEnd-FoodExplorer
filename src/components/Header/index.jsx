import { LuLogOut } from "react-icons/lu";
import { BiSolidPolygon } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";
import { Container, Logo, Logout, Search, NewDish } from './styles';
import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


export function Header() {
    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState([]);

    const { signOut } = useAuth();

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?name=${search}`);
            setDishes(response.data);
        }

        fetchDishes();
    },[search]);

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
                        <input className="search-input" type="text" placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </Search>
            <NewDish to="/adddish">
                Novo prato
            </NewDish>
            <Logout onClick={signOut}>
                <LuLogOut />
            </Logout>
        </Container>
    );
}