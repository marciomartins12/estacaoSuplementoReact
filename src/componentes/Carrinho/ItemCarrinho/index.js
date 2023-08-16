
const ItemCarrinho = (props)=> {
     return (
        <div>
            <img src={props.img}/>
            <h2>{props.nome}</h2>
            <span>{props.preco}</span>
        </div>
     )
}
export default ItemCarrinho