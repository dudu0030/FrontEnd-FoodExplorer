import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Dish } from '../../components/Dish';
import { Footer } from '../../components/Footer';

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
            <Dish data={{ 
                name: 'Torradas de Parma >', 
                description: 'Presunto de parma e rúcula em um pão com fermentação natural.', 
                price: 'R$ 25,97' 
              }} 
            />
          </Section>
          <Section title="Sobremesas">
            <Dish data={{ 
                name: 'Peachy pastrie >', 
                description: 'Delicioso folheado de pêssego com folhas de hortelã.', 
                price: 'R$ 25,97' 
              }} 
            />
          </Section>
          <Section title="Bebidas">
            <Dish data={{ 
                name: 'Suco de maracujá >',  
                price: 'R$ 25,97' 
              }} 
            />
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}