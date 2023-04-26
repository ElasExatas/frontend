import Tema from "./Tema";
//import Usuario from "./Usuario";

interface Postagem{
    id: number;
    tituloPostagem: string;
    conteudo: string;
    data: string;
    imagem: string;
    tema?:Tema|null
    //usuario?:Usuario|null

}
export default Postagem;