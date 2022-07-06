import styled from "styled-components";

export const NavBarContainer = styled.div`
  //este va ocupar el 100% del ancho de la pantalla esto viene bien que sea etatuco tanto para que se vea bien en pantalla de escritorio como tambien en la de celulares
  width: 100%;
  height: 80px;
  position: sticky; //para que siempre este pegado en la parte de arriba de la pantalla
  top: 8;
  z-index: 99; //esto para que este siempre arriba de todos los componentes
  background-color: #2D1E3E;
`;

export const NavBarWrapper = styled.div`
  //este wrapper va a esar dentro del navbarContainer
  margin: auto; //para que centre dentro del navbarContainer
  width: 100%;
  max-width: 1300px; //esto para que ocupe el ancho de la pantalla y lelgue a un tope
  height: 100%; //esto va eredar los 80% de el navarContainer
  align-items: center; //para que los alinie verticalmente
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; //para que los ponga en el costados
  color: #fff;
`;

export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; //para que comienze en el comienzo del flex
  align-items: center; //para que se alienie verticalmente
  font-family: "Istok Web", sans-serif;
  font-size: 1.2rem;
  color: #e8e6e3;
  padding-left: 1rem; //para que no quede pegado de costado a la pagina
`;

export const Menu = styled.ul`
  //esto es una lista que va acontener a todos los links
  height: 100%; //hay que recordar que el contenedor padre tiene 80px asi que va a ulizar eso
  display: flex; //para que lo ponga en linea uno al lado del otro
  justify-content: center; //para que los alinie verticalmente
  align-items: center;

  @media screen and (max-width: 960px){
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : "-100%")}; //esta propiedad es inportante porque va a ser la que nos va a dejar modificar el menu que se muestre o se oculte
    flex-direction: column;
    transition: 0.5s all ease-in; //para que haga la transicion de izquierda a derecha
    background-color: #2D1E3E;
  }
`;

export const MenuItem = styled.li`
  //esto va a estar contenido dentro de la ul de arriba
  height: 100%; //lo mismo para que ocupe esos 80px
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Righteous", cursive;
  font-weight: 400;

  &:hover {
    background-color: #788475;
    border-bottom: 0.3rem solid;
    transition: 0.4s ease-in;
    
  }

  @media screen and (max-width: 960px){
   width: 100%;
   height: 70px;
  }

`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: #cffc80;
`;

export const IconLogoMobile = styled.div`
  display: none; //para que por defecto el icono no se muestre unicamente se va a mostar cuando lleguemos a una vista los 960px

  @media screen and (max-width: 960px) {
    display: flex;
    color: #e8e6e3;
    font-size: 2rem;
    padding-right: 1rem;
  }
`;
