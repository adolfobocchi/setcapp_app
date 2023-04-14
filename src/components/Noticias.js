import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listarNoticiaRequest } from '../store/modules/Noticia/actions';
import { dataTimeFormatada } from '../utils/formats';
import { NoticiaItemAnchor, NoticiaItemData, NoticiaItemlist, NoticiaListArea, SectionArea } from './styled';

const Home = ({ loadin, noticias, fetchNoticia }) => {
  const [noticia, setNoticia] = useState(noticias);
  useEffect(() => {
    fetchNoticia();
    setNoticia(noticias)
  }, [fetchNoticia, noticias])
  return (
    <SectionArea background='#DDD' direcao={'column'} altura={500}>
      <h3 style={{marginTop: 20}}>ULTIMAS NOTICIAS</h3>
      <NoticiaListArea>
        {

          noticia.map((item, index) => {
            return (
              <NoticiaItemlist key={item.id}>
                <NoticiaItemAnchor href={`noticias/${item.id}`}>{item.titulo}</NoticiaItemAnchor>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchNoticia: () => dispatch(listarNoticiaRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)