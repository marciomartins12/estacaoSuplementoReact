import { LiaArrowAltCircleLeftSolid } from "react-icons/lia"
import ItemCarrinho from "./ItemCarrinho"
import "./PageCompras.css"
const PageCompras = (props) => {
    return (
        <div className="container-p">
            <LiaArrowAltCircleLeftSolid className="i" onClick={() => { props.trocarMenu(+1) }} color="#fff" />
            <div className=" div-item-i">
                <div>
                    {props.produtosDaLista.map((item, index) => {
                        return <ItemCarrinho
                            key={index}
                            nome={item.nome}
                            preco={item.preco}
                            img={item.img}
                        />
                    })}
                </div>

            </div>
        </div>
    )
}
export default PageCompras