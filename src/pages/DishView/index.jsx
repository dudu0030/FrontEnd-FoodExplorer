import { Container, Content, EditDish } from './styles';

import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';

export function DishView() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <Link to="/">
                    <IoIosArrowBack />
                    voltar
                    </Link>
                    <img src="../../assets/Ravanello.png" />

                    <h2>Salada Ravanello</h2>

                    <h3>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</h3>

                    <Tag title="alface" />
                    <Tag title="cebola" />
                    <Tag title="pão naan" />
                    <Tag title="pepino" />
                    <Tag title="rabanete" />
                    <Tag title="tomate" />

                </Content>
                    <EditDish to="/editdish">
                        Editar prato
                    </EditDish>
            </main>
            <Footer />
        </Container>
    );
}