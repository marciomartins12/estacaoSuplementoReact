import "./ItensCompras.css"
const ItemCarrinho = (props)=> {
     return (
        <div className="containerItemCarrinhoDeCompras">
            <div>
            <img src={props.img}/>
            </div>
                <div>
            <h2>{props.nome}</h2>
            <span>{props.preco}</span>
                    <div>

                    </div>
                </div>

        </div>
     )
}
export default ItemCarrinho