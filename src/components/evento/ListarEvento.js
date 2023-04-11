// ListarEvento.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarEventoRequest, listarEventoRequest, updateEventoRequest } from '../../store/modules/Evento/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'

const API_URL = 'http://localhost:3001';

const ListarEvento = ({ loading, evento, error, fetchEvento, criarEvento, updateEvento }) => {
  const [eventoSelected, setEventoSelected] = useState({});
  const [eventos, setEventos] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
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
    fetchEvento()
  }, []);

  useEffect(() => {
    setEventos(evento);
  }, [evento]);

  useEffect(() => {
    reset(eventoSelected);
  }, [eventoSelected])

  const handleSelectEvento = (index) => {
    setEventoSelected(evento[index]);

  }

  const handleDeleteEvento = (index) => {
  }

  const handleClearEvento = () => {
    setEventoSelected(null)
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
        <Input
          {...register('descricao', { required: true })}
        />
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
          {...register('hora', { required: true })}
        />
        {errors.hora && <span>Campo obrigatório</span>}

        <Label>Local</Label>
        <Input
          {...register('local', { required: true })}
        />
        {errors.local && <span>Campo obrigatório</span>}

        <Label>Ativo</Label>
        <Input
          type='checkbox'
          defaultValue={true}
          {...register('ativo', { required: true })}
        />
        {errors.ativo && <span>Campo obrigatório</span>}



        <Label>Fotos</Label>
        <Input type='file' multiple name='files' {...register('files', { required: false })} />
        {errors.logo && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearEvento}>Limpar</Button>
      </Form>
      <Container>
        {eventos?.map((event, index) => (
          <Card key={event.id} onClick={() => { handleSelectEvento(index) }} >
            <h3>{event.titulo}</h3>
            <p>{event.descricao}</p>
            {event.imagens.map(imagem => {
              return (<img src={`${API_URL}/${imagem.url}`} style={{ width: 40, height: 40 }} />)
            })}
            <button onClick={() => { handleDeleteEvento(index) }}>Delete</button>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.evento.loading,
    evento: state.evento.evento,
    error: state.evento.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvento: () => dispatch(listarEventoRequest()),
    criarEvento: (evento) => dispatch(criarEventoRequest(evento)),
    updateEvento: (id, evento) => dispatch(updateEventoRequest(id, evento))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarEvento)
