import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listarNoticiaRequest } from '../store/modules/Noticia/actions';
import { dataTimeFormatada, strSpaceToMinus } from '../utils/formats';
import { NoticiaItemAnchor, NoticiaItemData, NoticiaItemlist, NoticiaListArea, SectionArea } from './styled';

const API_URL = process.env.REACT_APP_URL_API;

const Home = ({ loadin, noticias }) => {
  const [noticia, setNoticia] = useState(noticias);
  useEffect(() => {
    setNoticia(noticias);
    
  }, [noticias])
  return (
    <SectionArea background='rgba(200,200,200,0.7)' direcao={'column'} altura={500}>
      <h3 style={{marginTop: 20}}>ULTIMAS NOTICIAS</h3>
      <NoticiaListArea>
        {

          noticia.map((item, index) => {
            return (
              <NoticiaItemlist key={item.id}>
                <NoticiaItemAnchor href={`noticias/${item.id}/${strSpaceToMinus(item.titulo)}`}>{item.titulo}</NoticiaItemAnchor>
                <NoticiaItemData>{dataTimeFormatada(item.data_hora)}</NoticiaItemData>
              </NoticiaItemlist>
            )
          })
        }
      </NoticiaListArea>
    </SectionArea>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.noticia.loading,
    noticias: state.noticia.noticia,
    error: state.noticia.error
  };
};


export default connect(mapStateToProps, null)(Home)