import { Container, Logo, Form } from "./styles";
import { BiSolidPolygon } from "react-icons/bi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn() {
    return (
        <Container>
            <Logo>
                <BiSolidPolygon />
                <div>
                <span>food explorer</span>
                </div>
            </Logo>
            <Form>
                <h2>Faça login</h2>
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

                <a href="#">
                    Criar uma conta
                </a>
            </Form>
        </Container>
    );
}