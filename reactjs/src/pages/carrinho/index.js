import { Container } from './styled';
import Contador from "../../components/contador";

export default function carrinho(){
    return(
        <Container>
            <div className="meu-ca"> Meu Carrinho </div>
        <div className="geral-ca"> 
    
            <div className="img-produto"> <img src="/assets/images/camisa-sp.jpg" height="270px" alt=""/> </div>

              <div className="textos"> 
                <div className="titulo-produto">Camisa São Paulo II 2021</div>   
                 <div className="vend"> Vendido e entregue por Destiny</div>
                 <form> <input type="checkbox" name="presente" value="presente"/> Para Presente </form>
                  
                 <div className="geral-vl">                 
                
                  <div className="valor">R$ 279,99 </div>
                  <Contador>
                  
                  </Contador>

                 </div>
                  
                  
                  
                     
                 
              </div>
                

        </div> 
        </Container>
    )
}