import { Container, Form, UploadButtonWrapper, UploadButton, FileInput } from './styles';

import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

export function AddDish() {
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
                        <FileInput type="file" name="file" />
                    </UploadButtonWrapper>

                    <label>Nome</label>
                    <Input id='name' placeholder="Ex.: Salada Ceasar" />

                    <label>Categoria</label>
                    <select>
                    <option>Refeição</option>
                    <option>Sobremesa</option>
                    <option>Bebida</option>
                    </select>

                    <label>Ingredientes</label>
                    <Input id='ingredients' placeholder="Pão Naan" />
        
                    <label>Preço</label>
                    <Input id='price' placeholder="R$ 00,00" />

                    <label>Descrição</label>
                    <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

                    <Button title="Salvar alterações" />
                </Form>
            </main>
            <Footer />
        </Container>
    );
}