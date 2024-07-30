import { useState } from 'react';
import { Container, Logo, Form } from "./styles";
import { BiSolidPolygon } from "react-icons/bi";
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    
    function handleSigIn() {
        signIn({ email, password });
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
                <h2>Faça login</h2>
                <span>Email</span>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />
                <span>Senha</span>
                <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSigIn} />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    );
}