import styled from "styled-components";
import Slider from 'react-slick';

export const HeaderArea = styled.header`
    display: flex;
    flex-direction: column;
    height: 180px;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    @media only screen and (max-width: 700px) {
        height: 260px;
    }
    
`

export const HeaderBar = styled.div`
    position: absolute;
    width: 100vw;
    height: auto;
    padding: 4px;
    background-color: #000;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    @media only screen and (max-width: 920px) {
       font-size: 0.9em;
    }
    @media only screen and (max-width: 840px) {
       font-size: 0.8em;
    }
`

export const HeaderContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    height: 180px;
`

export const LogoArea = styled.a`
    width: 30%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
`

export const LogoImg = styled.img`
    height: 100%;
    width: auto;
    @media (min-width: 992px) {
        height: 100%;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        height: 80%;
    }

    @media (min-width: 381px) and (max-width: 767px) {
        height: 60%;
    }
    @media (max-width: 380px) {
        height: 40%;
    }
    
`

export const SearchArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    @media only screen and (max-width: 768px) {
        display: none;
    }
    
`

export const ContatoArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 30px;

`;

export const Dropdown = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  background-color: #F38735;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  height: auto;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 0.7em;
  &:hover {
    background-color: #C2F24E;
  }
`;


export const BannerArea = styled.section`
    width: 100%;
    z-index: 1;
    
`;

export const BannerSlider = styled(Slider)`
    height: calc(100vh - 300px);
    width: 100%;
    z-index: 1;
`


export const FederadoSlider = styled(Slider)`
    height:100%;
    width: 100%;
    z-index: 1;
    
`

export const BannerImage = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: calc(100vh - 300px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    z-index: 900;
`;

export const BannerAnchor = styled.a`
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
    padding-bottom: 60px;
`

export const BannerText = styled.div`
    background-color: #C2F24E;
    color: #FFF;
    padding: 20px;
    font-size: 2em;
    @media only screen and (max-width: 700px) {
        font-size: 0.9em;
    }
`

export const LinkArea = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1em;
    font-weight: bold;
    
`


export const FaleConosco = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1em;
    font-weight: bold;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`


export const Menu = styled.div`
    text-decoration: none;
    display: none;
    justify-content: center;
    align-items: center;
    color: #000;
    
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        display: flex;
    }
`

export const LinkRedeSocial = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`

export const LinkRedeSocialInstagram = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    @media only screen and (max-width: 380px) {
        display: none;
    }
`

export const FormRow = styled.form`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Input2 = styled.input`
  padding: 0.5rem;
  height: 40px;
  width: 100%;
`;

export const IconArea = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color} ;
`


export const ServicoCard = styled.a`
    display: flex;
    height: auto;
    min-height: 200px;
    width: calc(50% - 10px);
    background-color: ${props => props.background};
    padding: 8px;
    text-decoration: none;
    color: #000;

    @media (min-width: 992px) {
        font-size: 1rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 0.8rem;
    }

    @media (min-width: 381px) and (max-width: 767px) {
        font-size: 0.7rem;
        width: calc(100% - 10px);
    }
    @media (max-width: 380px) {
        font-size: 0.6rem;
        width: calc(100% - 10px);
    }
    

`
export const SectionArea = styled.section`
    background-color: ${props => props.background};
    min-height: ${props => props.altura}px;
    height: auto;
    display: flex;
    flex: 1;
    flex-direction: ${props => props.direcao};
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    z-index: 1;
`

export const PageAreaContent = styled.section`
    background-color: ${props => props.background};
    min-height: ${props => props.altura}px;
    height: auto;
    flex: 1;
    z-index: 1;
    padding: 16px;
    ul {
        padding-left: 2em;
    }
`

export const NoticiaListArea = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
`

export const NoticiaItemlist = styled.li`
    list-style: none;
    height: 80px;
    border-bottom: 2px solid rgba(240,240,240,0.5);
    margin-bottom: 4px;
`

export const NoticiaItemAnchor = styled.a`
    display: flex;
    text-transform: uppercase;
    color: #f00;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-decoration: none;

    @media (min-width: 992px) {
        font-size: 1.2rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        font-size: 1.1rem;
    }

    @media (min-width: 381px) and (max-width: 767px) {
        font-size: 0.9rem;
    }
    @media (max-width: 380px) {
        font-size: 0.7rem;
    }
    
`

export const NoticiaItemData = styled.p`
    font-size: 0.8em;
    font-weight: bold;

`


export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
`;



export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


export const MapaArea = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    padding: 10px;
    align-items: center;
`

export const ContatoConteudoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    @media (min-width: 381px) and (max-width: 767px) {
        flex-direction: column-reverse;
        
    }
    @media (max-width: 380px) {
        flex-direction: column-reverse;
    }
`

export const ContatoInfoArea = styled.div`
    justify-content: center;
    margin: 20;
    padding: 20; 
    flex: 1; 
    display: flex;
    color: #F38735; 
    @media (min-width: 381px) and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 380px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ContatoInfo = styled.div`
    display: flex;
    margin-top: 20px;
`

export const ServicoCardIconArea = styled.div`
    width: 30%;
    height: 100%;
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ServicoCardImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    @media (max-width: 380px) {
        width: 60px;
        height: 60px;
    }
`

export const ServicoCardContent = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
    min-height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ServicoCardTitulo = styled.div`
    height: 40px;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: bold;
`