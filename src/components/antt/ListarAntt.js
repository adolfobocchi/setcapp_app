// ListarAntt.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarAnttRequest, deleteAnttRequest, listarAnttRequest, updateAnttRequest } from '../../store/modules/Antt/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import Modal from '../Modal';
import { FaTrash } from 'react-icons/fa';
import { showConfirmation } from '../../store/modules/Confirmation/actions';
import EditorHtml from '../EditorHtml';

const API_URL = process.env.REACT_APP_URL_API;

const ListarAntt = ({ loading, antts, error, fetchAntt, criarAntt, updateAntt, confirmacao, deleteAntt }) => {
  const formEmpty = {
    id: '',
    url: '',
    nome: '',
  }
  const [anttSelected, setAnttSelected] = useState(formEmpty);
  const [anttsState, setAnttsState] = useState([]);
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: anttSelected
  });

  useEffect(() => {
    fetchAntt()
  }, []);

  useEffect(() => {
    reset({ ...anttSelected });
  }, [reset, anttSelected])

  useEffect(() => {
    setAnttsState(antts)
  }, [antts]);

  const handleSelectAntt = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setAnttSelected(antts[index]);
    return false;
  }

  const handleClearAntt = () => {
    setAnttSelected({ ...formEmpty })
  }

  const handleDeleteAntt = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O ACORDO?', () => { deleteAntt(index) });
    return false;
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("anttFile", data.anttFile[0]);
    formData.append('antt', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateAntt(data.id, formData);

    } else {
      criarAntt(formData);
    }
    handleClearAntt();
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

        <Label>Arquivo</Label>
        <Input type='file' name='anttFile' {...register('anttFile', { required: false })} />
        {errors.anttFile && <span>Campo obrigatório</span>}
        {anttSelected?.url &&
          <a href={`${API_URL}/images/${anttSelected.url}`} target="_blank" rel="noreferrer"> Arquivo </a>
        }

        <Label>Conteudo</Label>
        <EditorHtml name="conteudo" control={control} defaultValue={anttSelected?.conteudo} />
        {errors.conteudo && <span>Erro</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearAntt}>Limpar</Button>
      </Form>
      <Container>
        {anttsState?.length > 0 && anttsState?.map((antt, index) => (
          <Card key={antt.id} onClick={(event) => { handleSelectAntt(event, index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{antt.id}</h3>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteAntt(event, antt.id)} style={{ height: '1em', width: '1em' }} />
              </div>
            </div>

          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.antt.loading,
    antts: state.antt.antt,
    error: state.antt.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAntt: () => dispatch(listarAnttRequest()),
    criarAntt: (antt) => dispatch(criarAnttRequest(antt)),
    updateAntt: (id, antt) => dispatch(updateAnttRequest(id, antt)),
    deleteAntt: (id) => dispatch(deleteAnttRequest(id)),
    confirmacao: (title, text, onConfirm) => dispatch(showConfirmation(title, text, onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarAntt)
