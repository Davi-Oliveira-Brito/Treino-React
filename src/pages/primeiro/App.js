import Comp from '../../components/Treino/treino.js'


import './App.scss'
 export default function App(){
    return (
      <div className='main'>
        
        <div className=' comp' >
            <h1>Treino Components</h1>
            <Comp texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui." secao = "seção 01" classe = "row"/>
            <Comp texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui." secao = "seção 01" classe = "reverse"/>
            <Comp texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non ." secao = "seção 01" classe = "column"/>
        </div>  

      </div>
    );
 }