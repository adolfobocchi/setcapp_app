import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listarNoticiaRequest } from '../store/modules/Noticia/actions';
import { dataTimeFormatada, strSpaceToMinus } from '../utils/formats';
import { NoticiaItemAnchor, NoticiaItemData, NoticiaItemlist, NoticiaListArea, SectionArea } from '../components/styled';
import Modal from '../components/Modal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Home = ({ loading, noticias, fetchNoticias, error, page }) => {
  const ativo = 1;
  useEffect(() => {
    fetchNoticias(page, ativo)
  }, []);

  if (loading) {
    return <Modal />
  }
  return (
    <SectionArea background='rgba(200,200,200,0.7)' direcao={'column'} altura={500}>
      {noticias && <>

        <h3 style={{ marginTop: 20 }}>NOTICIAS</h3>
        <NoticiaListArea>
          {

            noticias.map((item, index) => {
              return (
                <NoticiaItemlist key={item.id}>
                  <NoticiaItemAnchor href={`noticias/${item.id}/${strSpaceToMinus(item.titulo)}`}>{item.titulo}</NoticiaItemAnchor>
                  <NoticiaItemData>{dataTimeFormatada(item.data_hora)}</NoticiaItemData>
                </NoticiaItemlist>
              )
            })
          }
        </NoticiaListArea>

        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
          {page > 1 && 
            <button 
              style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }} 
              onClick={() => fetchNoticias(page - 1, ativo)}>
                <FaChevronLeft size={20} />
            </button>
          }
          <button 
            style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }} 
            onClick={() => fetchNoticias(page + 1, ativo)}>
              <FaChevronRight size={20} />
            </button>
        </div>
      </>}

    </SectionArea>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.noticia.loading,
    noticias: state.noticia.noticias,
    noticia: state.noticia.noticia,
    page: state.noticia.page,
    error: state.noticia.error
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchNoticias: (page, ativo) => dispatch(listarNoticiaRequest(page, ativo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)


