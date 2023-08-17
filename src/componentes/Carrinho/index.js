import { LiaArrowAltCircleLeftSolid } from "react-icons/lia"
import { BsWhatsapp } from "react-icons/bs"
import ItemCarrinho from "./ItemCarrinho"
import "./PageCompras.css"
const PageCompras = (props) => {
    let soma = 0 ; 
    return (
        <div className="container-p">
            <LiaArrowAltCircleLeftSolid className="i" onClick={() => { 
                if(props.produtosDaLista.length>0){
                   
                  }else{
                    window.location.reload()
                  }
                props.trocarMenu(+1) }} color="#fff" />
            <div className=" div-item-i">
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

                   {props.produtosDaLista.length > 0? (<div >
                        <button className="btn-enviar" onClick={()=>props.enviarParaOWhatsapp()}>
                        Enviar <BsWhatsapp className="icon-enviar"/>
                        </button>
                        <div className="valorTotal">R${props.produtosDaLista.reduce((a, b)=>b.preco + a ,0 
                         )}.00</div>
                    </div>):<></>}
                            
                </div>

            </div>
        </div>
    )
}
export default PageCompras