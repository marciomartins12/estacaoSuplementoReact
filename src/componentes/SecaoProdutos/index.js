import Item from "./ItemProduto"

const Produtos = (props) => {

    console.table(props.produtos)
    return (
        <div>
            {props.produtos.map((item)=>{
                return <Item
                nome={item.nome}
                imagem={item.img}
                subtitulo={item.subtitulo}
                descricao={item.descricao}
                preco={item.preco}
                text={item.classe}
                />
            }
            )}
        </div>
        )
}

export default Produtos