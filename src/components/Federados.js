import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listarConfederadoRequest } from '../store/modules/Confederado/actions';
import { FederadoSlider, SectionArea } from './styled';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const API_URL = process.env.REACT_APP_URL_API;


const FederadoCard = styled.a`
    display: flex;
    flex: 1;
    margin: 12px;
    background-color: ${props => props.background};
    padding: 4px;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const FederadoCardIconArea = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FederadoCardImg = styled.img`
    width: 180px;
    height: auto;
`

const Home = ({ loadin, confederados, fetchConfederado }) => {
  const [confederado, setConfederado] = useState(confederados);
  useEffect(() => {
    setConfederado(confederados)
  }, [confederados])

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <SectionArea background={'rgba(255,255,255,0.9)'} direcao={'row'} altura={200}>
    <FederadoSlider {...settings}>
      {


        confederado.map((item, index) =>
            <FederadoCard key={item.id} href={`${item.link}`} >
              <FederadoCardIconArea>
                <FederadoCardImg src={`${API_URL}/images/${item.url}`} />
              </FederadoCardIconArea>
            </FederadoCard>

        )
      }
      
      </FederadoSlider>
    </SectionArea>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.confederado.loading,
    confederados: state.confederado.confederado,
    error: state.confederado.error
  };
};


export default connect(mapStateToProps, null)(Home)