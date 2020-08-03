import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais ={
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setcategorias] = useState ([]);
  const [values, setvalues] = useState(valoresIniciais);

  function setValue (chave, valor){
    setvalues({
      ...values,
      [chave]: valor,

    })
  }

  function funcaoHandler(infos){
    setValue(infos.target.getAttribute('name'), infos.target.value);
}



  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(infos){
        infos.preventDefault();
        setcategorias([
          ...categorias,
          values
          
        ]);
        setvalues(valoresIniciais);
      }}>
        <FormField
        label = "Nome da Categoria:"
        type= "text"
        name= "nome"
        value ={values.nome}
        onChange = {funcaoHandler}
        />
            <FormField
            label = "Descrição:"
            type = "textarea"
            name= "descricao" 
        value ={values.descricao}
        onChange = {funcaoHandler}
        />
            <FormField
            label = "Cor:"
            type= "color"
            name= "cor"
        value ={values.cor}
        onChange = {funcaoHandler}
        />
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;