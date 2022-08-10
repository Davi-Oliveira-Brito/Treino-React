import imagem from '../../images/quadrado.png';
import './treino.scss'

export default function Comp(props) {

    return(
        <main className='main'> 
            <div className= {props.classe}>
                <div className='text'>
                    <p>{props.secao}</p>
                    <p>{props.texto}</p>
                </div>
                <div className='imagem'>
                    <img src={imagem} />
                </div>
                <input type="text" />
            </div>
        </main>
    );
}