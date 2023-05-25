// ListarEvento.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarEventoRequest, deleteEventoRequest, deleteImagemEventoRequest, listarEventoRequest, updateEventoRequest } from '../../store/modules/Evento/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import Modal from '../Modal';
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import EditorHtml from '../EditorHtml';

const API_URL = process.env.REACT_APP_URL_API;

const ListarEvento = ({ loading, eventos, error, page, deleteImagemEvento, deleteEvento, fetchEvento, criarEvento, updateEvento, confirmacao }) => {
  const ativo = 0;
  const formEmpty = {
    id: '',
    titulo: '',
    descricao: '',
    data: '',
    hora: '',
    local: '',
    ativo: false,
  }
  const [eventoSelected, setEventoSelected] = useState(formEmpty);
  const [eventosState, setEventosState] = useState([]);
  const { register, control,formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: eventoSelected
      ? {
        id: eventoSelected.id,
        titulo: eventoSelected.titulo,
        descricao: eventoSelected.descricao,
        data: eventoSelected.data,
        hora: eventoSelected.hora,
        local: eventoSelected.local,
        ativo: eventoSelected.ativo,
      }
      : {},
  });
  useEffect(() => {
    fetchEvento(page,ativo);
  }, []);


  useEffect(() => {
    reset(eventoSelected);
  }, [reset, eventoSelected]);

  useEffect(() => {
    setEventosState(eventos)
  }, [eventos]);

  const handleSelectEvento = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setEventoSelected(eventos[index]);
    return false;

  }

  const handleDeleteEvento = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O EVENTO?', ()=>{ deleteEvento(index)});
    //deleteEvento(index);
    return false;
  }

  const handleDeleteImagemEvento = (event, idEvento, idImagem) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR A IMAGEM DO EVENTO?', ()=>{ deleteImagemEvento(idEvento, idImagem)});
    
    return false;
  }

  const handleClearEvento = () => {
    setEventoSelected({ ...formEmpty })
    return false;
  }


  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key of Object.keys(data.files)) {
      formData.append('imagens', data.files[key])
    }
    formData.append('evento', JSON.stringify(data));
    if (data.id && data.id > 0) {
      updateEvento(data.id, formData);

    } else {
      criarEvento(formData);
    }
    handleClearEvento();

  }
  if (loading) {
    return <Modal />
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
        <Input
          hidden
          {...register('id')}
        />

        <Label>Titulo</Label>
        <Input
          {...register('titulo', { required: true })}
        />
        {errors.titulo && <span>Campo obrigatório</span>}

        <Label>Descricao</Label>
        <EditorHtml name="descricao" control={control} defaultValue={eventoSelected?.descricao} />
        
        {errors.descricao && <span>Campo obrigatório</span>}

        <Label>Data</Label>
        <Input
          type='date'
          {...register('data', { required: true })}
        />
        {errors.data && <span>Campo obrigatório</span>}

        <Label>Hora</Label>
        <Input
          type='time'
          {...register('hora', { required: false })}
        />
        {errors.hora && <span>Campo obrigatório</span>}

        <Label>Local</Label>
        <Input
          {...register('local', { required: false })}
        />
        {errors.local && <span>Campo obrigatório</span>}

        <Label>Ativo</Label>
        <Input
          type='checkbox'
          {...register('ativo')}
        />
        {errors.ativo && <span>Campo obrigatório</span>}



        <Label>Fotos</Label>
        <Input type='file' multiple name='files' {...register('files', { required: false })} />
        {errors.logo && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearEvento}>Limpar</Button>
      </Form>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
          {page > 1 && 
            <button 
              style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }} 
              onClick={() => fetchEvento(page - 1, ativo)}>
                <FaChevronLeft size={20} />
            </button>
          }
          <button 
            style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }} 
            onClick={() => fetchEvento(page + 1, ativo)}>
              <FaChevronRight size={20} />
            </button>
        </div>
      <Container>
        {eventosState?.length > 0 && eventosState?.map((evento, index) => (
          <Card key={evento.id} onClick={(event) => { handleSelectEvento(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{evento.titulo}</h3>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteEvento(event, evento.id)} style={{ height: '1em', width: '1em' }} />
              </div>

            </div>

            <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
              {evento.imagens?.map(imagem => {
                return (
                  <div key={imagem.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
                    <img src={`${API_URL}/images/${imagem.url}`} style={{ width: 40, height: 40 }} alt='imagem eventos' />
                    <div style={{ cursor: 'pointer' }} >
                      <FaTrash onClick={(event) => handleDeleteImagemEvento(event, evento.id, imagem.id)} style={{ height: '1em', width: '1em' }} />
                    </div>

                  </div>

                )
              })}
            </div>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.evento.loading,
    eventos: state.evento.eventos,
    page: state.evento.page,
    error: state.evento.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvento: (page,ativo) => dispatch(listarEventoRequest(page,ativo)),
    criarEvento: (evento) => dispatch(criarEventoRequest(evento)),
    updateEvento: (id, evento) => dispatch(updateEventoRequest(id, evento)),
    deleteEvento: (id) => dispatch(deleteEventoRequest(id)),
    deleteImagemEvento: (idEvento, idImagem) => dispatch(deleteImagemEventoRequest(idEvento, idImagem)),
    confirmacao: (title,text,onConfirm) => dispatch(showConfirmation(title,text,onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarEvento)
