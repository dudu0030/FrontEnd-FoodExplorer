import { Container, Logo, Form } from "./styles";
import { BiSolidPolygon } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
           return alert("Por gentileza, preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Obrigado por criar uma conta em nosso site!");
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possivel criar uma conta");
                }
            });
    }

    return (
        <Container>
            <Logo>
                <BiSolidPolygon />
                <div>
                <span>food explorer</span>
                </div>
            </Logo>
            <Form>
                <h2>Crie sua conta</h2>
                <span>Seu nome</span>
                <Input 
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />
                <span>Email</span>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                <span>Senha</span>
                <Input 
                    minlength="6"
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    );
}