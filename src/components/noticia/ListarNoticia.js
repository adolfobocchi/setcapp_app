// ListarNoticia.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarNoticiaRequest, deleteNoticiaRequest, listarNoticiaRequest, updateNoticiaRequest } from '../../store/modules/Noticia/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import EditorHtml from '../EditorHtml';
import DataPicker from '../DataPicker';
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
import Modal from '../Modal';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import { dataTimeFormatada } from '../../utils/formats';

const ListarNoticia = ({ loading, noticias, error, page, fetchNoticia, criarNoticia, updateNoticia, deleteNoticia, confirmacao }) => {
  const ativo = 0;
  const formEmpty = {
    id: '',
    titulo: '',
    conteudo: '',
    data_hora: '',
    ativo: false,
  }
  const [noticiaSelected, setNoticiaSelected] = useState(formEmpty);
  const [noticiasState, setEventosState] = useState([]);
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: noticiaSelected
      ? {
        id: noticiaSelected.id,
        titulo: noticiaSelected.titulo,
        conteudo: noticiaSelected.conteudo,
        data_hora: noticiaSelected.data_hora,
        ativo: noticiaSelected.ativo,
      }
      : {},
  });

  useEffect(() => {
    fetchNoticia(page, ativo)
  }, []);

  useEffect(() => {
    reset({ ...noticiaSelected });
  }, [reset, noticiaSelected])

  useEffect(() => {
    setEventosState(noticias)
  }, [noticias]);

  const handleSelectNoticia = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setNoticiaSelected(noticias[index]);

  }

  const handleDeleteNoticia = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O EVENTO?', () => { deleteNoticia(index) });
  }

  const handleClearNoticia = () => {
    setNoticiaSelected({ ...formEmpty })
  }

  const onSubmit = (data) => {
    if (data.id && data.id > 0) {
      updateNoticia(data.id, data);

    } else {
      criarNoticia(data);
    }
    handleClearNoticia();
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

        <Label>Conteudo</Label>
        <EditorHtml name="conteudo" control={control} defaultValue={noticiaSelected?.conteudo} />

        <Label>Data</Label>
        <DataPicker name="data_hora" control={control} defaultValue={noticiaSelected?.data_hora} />
        {errors.data_hora && <span>Campo obrigatório</span>}

        <Label>Ativo</Label>
        <Input
          type='checkbox'
          {...register('ativo')}
        />
        {errors.ativo && <span>Campo obrigatório</span>}
        

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearNoticia}>Limpar</Button>
      </Form>

      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
        {page > 1 &&
          <button
            style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }}
            onClick={() => fetchNoticia(page - 1, ativo)}>
            <FaChevronLeft size={20} />
          </button>
        }
        <button
          style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer', margin: 10 }}
          onClick={() => fetchNoticia(page + 1, ativo)}>
          <FaChevronRight size={20} />
        </button>
      </div>
      <Container>
        {noticiasState?.length > 0 && noticiasState?.map((noticia, index) => (
          <Card key={noticia.id} onClick={(event) => { handleSelectNoticia(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5 style={{ textAlign: 'justify', marginRight: 10, marginBottom: 10 }}>{noticia.titulo}</h5>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteNoticia(event, noticia.id)} style={{ height: '1em', width: '1em' }} />
              </div>

            </div>

            <p style={{ fontSize: 12 }}>{dataTimeFormatada(noticia.data_hora)}</p>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.noticia.loading,
    noticias: state.noticia.noticias,
    page: state.noticia.page,
    error: state.noticia.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNoticia: (page, ativo) => dispatch(listarNoticiaRequest(page, ativo)),
    criarNoticia: (noticia) => dispatch(criarNoticiaRequest(noticia)),
    updateNoticia: (id, noticia) => dispatch(updateNoticiaRequest(id, noticia)),
    deleteNoticia: (id) => dispatch(deleteNoticiaRequest(id)),
    confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarNoticia)
