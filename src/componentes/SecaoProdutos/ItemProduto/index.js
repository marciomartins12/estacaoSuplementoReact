const Item = (props)=>{
    return (
        <div>
            <img src={props.imagem} alt={props.nome}/>
            <h3>{props.nome}</h3>
            <h5>{props.subtitulo}</h5>
            <h4>{props.preco}</h4>
        </div>
    )
}
export default Item