import Produtos from "./componentes/SecaoProdutos";
import "./App.css"
import { v4 as uuidv4 } from "uuid"
import { Fragment, useState } from "react";
import Carrinho from "./componentes/botaoCarrinhoDeCompras";
import PageCompras from "./componentes/Carrinho";


function App() {
  const [produtos, setProdutos] = useState([
    {
      nome: "Carnívoro Isolate",
      subtitulo: "Beef protein isolate",
      preco: 170.00,
      descricao: "Adquira o Carnivoro Beef Protein Isolate agora mesmo e aproveite todos os benefícios que ele tem a oferecer. Seja você um atleta profissional, um entusiasta do fitness ou alguém que busca melhorar sua saúde e bem-estar, este suplemento é a escolha certa para você. Invista em sua saúde, invista em qualidade, invista no Carnivoro Beef Protein Isolate!",
      img: "../img/CarnivoroIsolate.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20%20Carnivoro%20Isolate"
    },
    {
      nome: "Whey Protein",
      subtitulo: "Growth 1kg",
      preco: 170.00,
      descricao: "Não espere mais para investir em sua performance e resultados. Adquira agora mesmo o Whey Protein 80% e experimente a diferença que esse suplemento de qualidade pode fazer em sua vida. Aproveite todos os benefícios de uma proteína premium, comprovada e confiável. Faça a escolha certa, faça a escolha do Whey Protein 80%!",
      img: "../img/WheyProtein80.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Whey%20Protein%2080%"
    },
    {
      nome: "3Whey",
      subtitulo: "Protein Powder",
      preco: 90.00,
      descricao: "A vantagem do 3Whey é que você obtém o melhor dos três mundos em um único produto. Essa combinação de proteínas de diferentes velocidades de absorção garante uma liberação prolongada de aminoácidos, o que contribui para a síntese proteica contínua, recuperação muscular otimizada e suporte ao crescimento muscular.",
      img: "../img/3whey.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%203Whey"
    },
    {
      nome: "Hiper Mass",
      subtitulo: "Hipercalórico",
      preco: 80.00,
      descricao: "Disparado o melhor dos hipercalóricos disponíveis no mercado, com a maior proporção entre carboidratos e proteínas. Especialmente para aqueles que buscam alcançar a hipertrofia e ganhar massa muscular",
      img: "../img/HiperMass.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Hiper Mass"
    },
    {
      nome: "HiperCalórico",
      subtitulo: "Hipercalórico",
      preco: 120.00,
      descricao: "Seja você um atleta que deseja melhorar seu desempenho, um praticante de musculação que busca ganho de massa muscular ou alguém que necessita de um aumento de peso saudável, o Anabolic Hipercalórico é a escolha ideal para você.",
      img: "../img/Hipercalorico.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20HiperCalorico"
    },
    {
      nome: "Creatina Growth",
      subtitulo: "250g",
      preco: 150.00,
      descricao: "Invista agora mesmo na Creatina Growth e desfrute dos benefícios comprovados que ela pode oferecer. Prepare-se para elevar seus treinos a um novo patamar, aumentar sua força e potência muscular, e alcançar resultados surpreendentes em sua jornada fitness. Faça a escolha inteligente, faça a escolha da Creatina Growth!",
      img: "../img/growth creatina.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Creatina%20Growth"
    },
    {
      nome: "Creatina 300g",
      subtitulo: "Black Skull",
      preco: 140.00,
      descricao: "Prepare-se para experimentar uma explosão muscular e um desempenho máximo com a Creatina Turbo Black Skull. Aumente sua força, potência e resistência, supere seus objetivos e alcance resultados extraordinários.",
      img: "../img/creatina300.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Creatina%20300g%20Black%20Skull"
    },
    {
      nome: "Creatina 150g",
      subtitulo: "Black Skull",
      preco: 85.00,
      descricao: "Prepare-se para experimentar uma explosão muscular e um desempenho máximo com a Creatina Turbo Black Skull. Aumente sua força, potência e resistência, supere seus objetivos e alcance resultados extraordinários.",
      img: "../img/creatina150.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Creatina%20150g%20Black%20Skull"
    },
    {
      nome: "Creatina Max",
      subtitulo: "Titanium 150g",
      preco: 110.00,
      descricao: "Mais energia para as células dos músculos, diminui a fadiga e ajuda na recuperação muscular, aumenta a força durante os treinos  e contribui para o aumento de massa muscular",
      img: "../img/Creatina Max Titanium 150g.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20CreatinaMax%20Titanium%20150g"
  },
  {
      nome: "Creatina Black skull",
      subtitulo: " 100% pura",
      preco: 100.00,
      descricao: "Mais energia para as células dos músculos, diminui a fadiga e ajuda na recuperação muscular, aumenta a força durante os treinos  e contribui para o aumento de massa muscular",
      img: "../img/Creatina Black skull.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Creatina%20Max%20Black%20Skull%20100%%20pura"
  },
    {
      nome: "Colageno Hidrolisado",
      subtitulo: "Max Titanium",
      preco: 60.00,
      descricao: "Além dos benefícios estéticos, o Colágeno Hidrolisado da Max Titanium também é uma excelente opção para quem sofre com dores articulares e problemas nas articulações. A suplementação regular ajuda a melhorar a lubrificação e a flexibilidade das articulações, proporcionando maior conforto e mobilidade para as atividades diárias.",
      img: "../img/colagenHidrolisado.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Colagen%20Hidrolisado"
    },
    {
      nome: "Nuclear Rush",
      subtitulo: "Pré-treino",
      preco: 75.00,
      descricao: "Prepare-se para experimentar uma explosão de energia, foco aprimorado e desempenho máximo com o Pré-Treino Nuclear Rush. Elevar seus treinos a um novo patamar, superar seus limites e alcançar resultados impressionantes. Faça a escolha poderosa, faça a escolha do Pré-Treino Nuclear Rush para um treino verdadeiramente explosivo!",
      img: "../img/nuclearRush.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Nuclar%20Rush"
    },
    {
      nome: "Pasta de Amendoim",
      subtitulo: "Chocolate Branco",
      preco: 80.00,
      descricao: "Escolha a Pasta de Amendoim Laganexa e desfrute de um alimento versátil, saboroso e nutritivo. Com sua textura cremosa e sabor irresistível, ela vai conquistar seu paladar e se tornar um ingrediente essencial em sua dieta. Faça a escolha saudável, faça a escolha da Pasta de Amendoim Laganexa para um deleite nutritivo e delicioso!",
      img: "../img/chocolateBranco.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Pasta%20de%20Amendoim%20sabor%20chocolate%20branco"
    },
    {
      nome: "Pasta de Amendoim",
      subtitulo: "Leitinho com Chocolate",
      preco: 80.00,
      descricao: "scolha a Pasta de Amendoim Laganexa,possui whey protein em sua composição e desfrute de um alimento versátil, saboroso e nutritivo. Com sua textura cremosa e sabor irresistível, ela vai conquistar seu paladar e se tornar um ingrediente essencial em sua dieta. Faça a escolha saudável, faça a escolha da Pasta de Amendoim Laganexa para um deleite nutritivo e delicioso!",
      img: "../img/leitinho.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Pasta%20de%20Amendoim%20%20sabor%20leitinho%20com%20chocolate"
    },
    {
      nome: "Pasta de Amendoim",
      subtitulo: "Castanha de Cajú",
      preco: 80.00,
      descricao: "A Pasta de Amendoim Alaganexa Sabor Doce de Leite com Castanha de Caju é uma opção deliciosa e indulgente para os amantes de sabores doces. Combinando o sabor suave do doce de leite com o crocante das castanhas de caju, essa pasta é uma verdadeira tentação para os sentidos.",
      img: "../img/caju.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Pasta%20de%20Amendoim%20sabor%20castanha%20de%20caju"
    },
    {
      nome: "Pasta de Amendoim",
      subtitulo: "Avelã ZERO Lactose",
      preco: 80.00,
      descricao: "A Pasta de Amendoim Alaganexa Sabor Avelã é uma opção deliciosa e indulgente para os amantes de sabores doces. Essa pasta é uma verdadeira tentação para os sentidos.",
      img: "../img/avela.png",
      id: uuidv4(),
      confirmacao: false,
      classe: "%20Pasta%20de%20Amendoim%20sabor%20avelã%20"
    },

  ]);
  const [carrinho, setCarrinho] = useState([])
  const [menu, setMenu] = useState(1)

  function trocaMenu(valor) {
    setMenu(valor)
  }

  function enviarParaOCarrinho(item) {
    const teste = produtos.filter((p) => p.id === item)
    const teste2 = carrinho
    setCarrinho([...teste2, ...teste])


    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === item
          ? { ...produto, confirmacao: !produto.confirmacao }
          : produto
      ));

  }

  function removerItemDaLista(id) {
    setCarrinho(carrinho.filter((item) => item.id !== id));

    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === id
          ? { ...produto, confirmacao: !produto.confirmacao }
          : produto
      ));
     
  }

  function enviarParaOWhatsapp() {
    let textEnviarParaWhatasapp = `https://api.whatsapp.com/send?phone=5598981024732&text=Ol%C3%A1,%20vim%20pelo%20Site%20e%20gostaria%20de%20comprar%20o%20${carrinho.map((item) => item.classe)}%20 Com%20Valor%20Total%20de: R$${carrinho.reduce((a, b) => b.preco + a, 0)}.00`

    window.location.href = textEnviarParaWhatasapp;

  }

  return (
    <Fragment>

      <main className="App">
        {(menu === 1) ? (<section>

          <h1>Estação<span>Suplementos</span></h1>
          <Produtos
            sacola={carrinho}
            carrinho={enviarParaOCarrinho}
            produtos={produtos}
          />
          <Carrinho
            menu={trocaMenu}
            item={carrinho}
          />
        </section>) :
          (<section className="pagCarrinhoDeCompras">
            <PageCompras

              trocarMenu={trocaMenu}
              remover={removerItemDaLista}
              produtosDaLista={carrinho}
              enviarParaOWhatsapp={enviarParaOWhatsapp}
            />
          </section>)}

      </main>
      <p className="pc"> Somente no mobile. por favor entre com o celular ou coloque na aba responsivo para algum celular.</p>
    </Fragment>
  );
}

export default App;
