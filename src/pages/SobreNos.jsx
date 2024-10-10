import Cartao from "../components/Cartao/Cartao";
import Base from "./Base";
import ListContainer from "../components/ListContainer/ListContainer"
const dados= [
{
    titulo: "Um titulo do array",
    texto: "um texto do Array"
},
{
    titulo: "Outro titulo array",
    texto: "outro texto do array"
}
];

const SobreNos = () => {
    return(
    <Base>
     <ListContainer>
        {
            dados.map( (ele, i) =>(
                <Cartao
                key={i}
                titulo={ele.titulo}
                texto={ele.texto}
                />
            ))
        }
      </ListContainer>
     </Base>
     );
    }

export default SobreNos;