import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listarEventoRequest } from '../store/modules/Evento/actions';
import { dataTimeFormatada, strSpaceToMinus } from '../utils/formats';
import { NoticiaItemAnchor, NoticiaItemData, NoticiaItemlist, NoticiaListArea, SectionArea } from '../components/styled';
import Modal from '../components/Modal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Home = ({ loading, eventos, fetchEventos, error, page }) => {
  const ativo = 1;
  useEffect(() => {
    fetchEventos(page,ativo)
  }, []);

  if (loading) {
    return <Modal />
  }
  return (
    <SectionArea background='rgba(200,200,200,0.7)' direcao={'column'} altura={500}>
      {eventos && <>

        <h3 style={{ marginTop: 20 }}>EVENTOS</h3>
        <NoticiaListArea>
          {

            eventos.map((item, index) => {
              return (
                <NoticiaItemlist key={item.id}>
                  <NoticiaItemAnchor href={`eventos/${item.id}/${strSpaceToMinus(item.titulo)}`}>{item.titulo}</NoticiaItemAnchor>
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
              onClick={() => fetchEventos(page - 1, ativo)}>
                <FaChevronLeft size={20} />
            </button>
          }
          <button 
            style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }} 
            onClick={() => fetchEventos(page + 1, ativo)}>
              <FaChevronRight size={20} />
            </button>
        </div>
      </>}

    </SectionArea>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.evento.loading,
    eventos: state.evento.eventos,
    evento: state.evento.evento,
    page: state.evento.page,
    error: state.evento.error
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchEventos: (page, ativo) => dispatch(listarEventoRequest(page, ativo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)


