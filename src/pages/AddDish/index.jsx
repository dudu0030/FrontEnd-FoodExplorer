import { Container, Form, UploadButtonWrapper, UploadButton, FileInput } from './styles';

import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { api } from '../../services/api';

export function AddDish() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    async function handleNewDish() {
        if (!name) {
            return alert("Insira o nome do prato");
        }

        if (!description) {
            return alert("Insira uma descrição para o prato");
        }

        await api.post("/dishes", {
            name,
            category,
            ingredients,
            price,
            description
        });

        alert("Prato adicionado com sucesso!");
        navigate("/");
    }

    function handleUpDish(event) {
        const file = event.target.files[0];
        setDishFile(file);
    }

    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <Link to="/">
                    <IoIosArrowBack />
                    voltar
                    </Link>
                    <header>
                        <h1>Adicionar prato</h1>
                    </header>

                    <label>Imagem do prato</label>
                    <UploadButtonWrapper>
                        <UploadButton type="button">
                            <MdOutlineFileUpload />
                            Selecione imagem
                        </UploadButton>
                        <FileInput type="file" name="file" onChange={handleUpDish} />
                    </UploadButtonWrapper>

                    <label>Nome</label>
                    <Input id='name' placeholder="Ex.: Salada Ceasar" onChange={e => setName(e.target.value)} />

                    <label>Categoria</label>
                    <select onChange={e => setCategory(e.target.value)}>
                    <option>Refeição</option>
                    <option>Sobremesa</option>
                    <option>Bebida</option>
                    </select>

                    <label>Ingredientes</label>
                    <Input id='ingredients' placeholder="Pão Naan" onChange={e => setIngredients(e.target.value)} />
        
                    <label>Preço</label>
                    <Input id='price' placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)} />

                    <label>Descrição</label>
                    <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)} />

                    <Button title="Salvar alterações" onClick={handleNewDish} />
                </Form>
            </main>
            <Footer />
        </Container>
    );
}