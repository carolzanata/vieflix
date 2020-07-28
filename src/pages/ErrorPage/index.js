import React from 'react';
import PageDefault from '../../components/PageDefault';
import wall from '../../assets/img/wall.png';
import{Link} from 'react-router-dom';
import Button from '../../components/Button';

function ErrorPage(){
    return (
        <PageDefault>
            <nav className = "ErrorPage">
              <p>  <img className= "wall" src={wall} alt="VieflixLogo" hspace = "100px" height = "350px" align="left" />
                <h1>Não fique triste! </h1> </p>
                <br/>
               <h3>Essa página não existe, <br/>
                mas você pode acessar a Home 
                </h3> 
                <br/>
                <Button as={Link} className= "ButtonLink" to="/">
            AQUI :)
        </Button>
            </nav>

            
        </PageDefault>
    )
}

export default ErrorPage;