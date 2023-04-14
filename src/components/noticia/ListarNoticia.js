// ListarNoticia.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarNoticiaRequest, listarNoticiaRequest, updateNoticiaRequest } from '../../store/modules/Noticia/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import EditorHtml from '../EditorHtml';
import DataPicker from '../DataPicker';

const API_URL = 'http://localhost:3001';
//const API_URL = 'http://setcapp-api.azurewebsites.net';

const ListarNoticia = ({ loading, noticias, error, fetchNoticia, criarNoticia, updateNoticia }) => {
  const formEmpty = {
    id: '',
    titulo: '',
    conteudo: '',
    data_hora: '',
    ativo: false,
  }
  const [noticiaSelected, setNoticiaSelected] = useState(formEmpty);
  const [noticiasList, setNoticiasList] = useState([]);
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
    fetchNoticia()
    setNoticiasList(noticias)
  }, [noticias]);

  useEffect(() => {
    reset(noticiaSelected);
  }, [noticiaSelected])

  const handleSelectNoticia = (index) => {
    setNoticiaSelected(noticias[index]);

  }

  const handleDeleteNoticia = (index) => {
  }

  const handleClearNoticia = () => {
    setNoticiaSelected({...formEmpty})
  }

  const onSubmit = (data) => {
    if (data.id && data.id > 0) {
      updateNoticia(data.id, data);

    } else {
      criarNoticia(data);
    }
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
      <Container>
        {noticiasList?.map((noticia, index) => (
          <Card key={noticia.id} onClick={() => { handleSelectNoticia(index) }} >
            <h3>{noticia.titulo}</h3>
            <button onClick={() => { handleDeleteNoticia(index) }}>Delete</button>
          </Card>
        ))}
      </Container>
    </>

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
    criarNoticia: (noticia) => dispatch(criarNoticiaRequest(noticia)),
    updateNoticia: (id, noticia) => dispatch(updateNoticiaRequest(id, noticia))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarNoticia)
