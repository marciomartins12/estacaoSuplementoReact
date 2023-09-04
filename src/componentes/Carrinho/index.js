import { LiaArrowAltCircleLeftSolid } from "react-icons/lia"
import { BsWhatsapp } from "react-icons/bs"
import ItemCarrinho from "./ItemCarrinho"
import "./PageCompras.css"
import { Link } from "react-router-dom"
const PageCompras = (props) => {
    return (
        <div className="container-p">
            <div className="h">

                <Link to={"/"}><LiaArrowAltCircleLeftSolid className="i"  color="#fff" /></Link>
                <h4>Carrinho d<span>e Compras</span></h4>

            </div>
            <div className=" div-item-i">

                {props.produtosDaLista.length <= 0 ?
                    <p className="semNadaNoCarrinho">você não tem item no carrinho</p>
                    : <></>}
                <div>
                    {props.produtosDaLista.map((item, index) => {
                        return <ItemCarrinho
                            key={index}
                            nome={item.nome}
                            preco={item.preco}
                            img={item.img}
                            id={item.id}
                            removerItemDaLista={props.remover}
                        />
                    })}

                    {props.produtosDaLista.length > 0 ? (<div >
                        <button className="btn-enviar" onClick={() => props.enviarParaOWhatsapp()}>
                            Enviar <BsWhatsapp className="icon-enviar" />
                        </button>
                        <div className="valorTotal">R${props.produtosDaLista.reduce((a, b) => b.preco + a, 0
                        )}.00</div>
                    </div>) : <></>}

                </div>

            </div>
        </div>
    )
}
export default PageCompras;