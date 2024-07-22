import { Container, Logo, Form } from "./styles";
import { BiSolidPolygon } from "react-icons/bi";
import { Link } from "react-router-dom";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignUp() {
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
                />
                <span>Email</span>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                />
                <span>Senha</span>
                <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                />

                <Button title="Entrar" />

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    );
}