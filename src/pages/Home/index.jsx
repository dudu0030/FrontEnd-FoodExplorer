import { Container, Cards, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

import { PiPencilSimpleLight } from "react-icons/pi";

export function Home() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
      <Section title="Refeições">
        <Cards>
        <PiPencilSimpleLight />
        <img src="../../assets/Ravanello.png" />
        <h2>Salada Ravanello</h2>
        <h3>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</h3>
        <span>R$ 49,97</span>
        </Cards>

        <Cards>
        <PiPencilSimpleLight />
        <img src="../../assets/Spaguetti.png" />
        <h2>Spaguetti Gambe</h2>
        <h3>Massa fresca com camarões e pesto. </h3>
        <span>R$ 79,97</span>
        </Cards>

        <Cards>
        <PiPencilSimpleLight />
        <img src="../../assets/Torradas.png" />
        <h2>Torradas de Parma</h2>
        <h3>Presunto de parma e rúcula em um pão com fermentação natural.</h3>
        <span>R$ 25,97</span>
        </Cards>
      </Section>

      <Section title="Sobremesas">
      <Cards>
      <PiPencilSimpleLight />
        <img src="../../assets/Prugna.png" />
        <h2>Prugna Pie</h2>
        <h3>Torta de ameixa com massa amanteigada, polvilho em açúcar.</h3>
        <span>R$ 79,97</span>
        </Cards>

        <Cards>
        <PiPencilSimpleLight />
        <img src="../../assets/Peachy.png" />
        <h2>Peachy pastrie</h2>
        <h3>Delicioso folheado de pêssego com folhas de hortelã.</h3>
        <span>R$ 32,97</span>
        </Cards>

        <Cards>
        <PiPencilSimpleLight />
        <img src="../../assets/Macarons.png" />
        <h2>Macarons</h2>
        <h3>Farinha de amêndoas, manteiga, claras e açúcar.</h3>
        <span>R$ 79,97</span>
        </Cards>
      </Section>

      <Section title="Bebidas">
      <Cards>
      <PiPencilSimpleLight />
        <img src="../../assets/Expresso.png" />
        <h2>Espresso</h2>
        <h3>Café cremoso feito na temperatura e pressões perfeitas.</h3>
        <span>R$ 15,97</span>
        </Cards>

        <Cards>
        <PiPencilSimpleLight />
        <img src="../../assets/Maracuja.png" />
        <h2>Suco de maracujá</h2>
        <h3>Suco de maracujá gelado, cremoso, docinho.</h3>
        <span>R$ 13,97</span>
        </Cards>

        <Cards>
        <PiPencilSimpleLight />
        <img src="../../assets/Tè d'autunno.png" />
        <h2>Tè d'autunno</h2>
        <h3>Chá de anis, canela e limão. Sinta o outono italiano.</h3>
        <span>R$ 19,97</span>
        </Cards>

      </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}