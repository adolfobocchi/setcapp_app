// ListarServico.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarServicoRequest, deleteServicoRequest, listarServicoRequest, updateServicoRequest } from '../../store/modules/Servico/actions'
import { Button, Card, Container, Form, Image, Input, Label } from './styled'
import EditorHtml from '../EditorHtml';
import Modal from '../Modal';
import { FaTrash } from 'react-icons/fa';
import { showConfirmation } from '../../store/modules/Confirmation/actions';

const API_URL = process.env.REACT_APP_URL_API;

const ListarServico = ({ loading, servicos, error, fetchServico, criarServico, updateServico, deleteServico, confirmacao }) => {
  const formEmpty = {
    id: '',
    nome: '',
    conteudo: '',
    link: '',
    ativo: false,
    url: ''
  }
  const [servicoSelected, setServicoSelected] = useState({});
  const [servicosState, setServicosState] = useState([]);
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: servicoSelected
      ? {
        id: servicoSelected.id,
        nome: servicoSelected.nome,
        descricao: servicoSelected.descricao,
        url: servicoSelected.url,
        link: servicoSelected.link,
        ativo: servicoSelected.ativo,
      }
      : {},
  });


  useEffect(() => {
    fetchServico()
  }, []);

  useEffect(() => {
    reset({...servicoSelected});
  }, [reset, servicoSelected])

  useEffect(() => {
    setServicosState(servicos)
  }, [servicos]);

  const handleSelectServico = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setServicoSelected(servicos[index]);
    return false;
  }

  const handleDeleteServico = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    confirmacao('DELETAR REGISTRO', 'VOCE REALMENTE DESEJA EXCLUIR O SERVICO?', ()=>{ deleteServico(index)});
  }

  const handleClearServico = () => {
    setServicoSelected({...formEmpty})
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("servicoFile", data.servicoFile[0]);
    formData.append('servico', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateServico(data.id, formData);

    } else {
      criarServico(formData);
    }
    handleClearServico();
  }
  if(loading) {
    return <Modal />
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
        <Input
          hidden
          {...register('id')}
        />

        <Label>Imagem</Label>
        <Input type='file' name='servicoFile' {...register('servicoFile', { required: false })} />
        {errors.servicoFile && <span>Campo obrigatório</span>}
        {servicoSelected?.url &&
          <Image src={`${API_URL}/images/${servicoSelected?.url || null}`} />
        }
        

        <Label>Nome</Label>
        <Input
          {...register('nome', { required: true })}
        />
        {errors.nome && <span>Campo obrigatório</span>}

        <Label>Conteudo</Label>
        <EditorHtml name="descricao" control={control} defaultValue={servicoSelected?.descricao} />

        <Label>Link</Label>
        <Input
          {...register('link')}
        />
        {errors.link && <span>Campo obrigatório</span>}

        <Label>Ativo</Label>
        <Input
          type='checkbox'
          {...register('ativo')}
        />
        {errors.ativo && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearServico}>Limpar</Button>
      </Form>
      <Container>
        {servicosState?.length > 0 && servicosState?.map((servico, index) => (
          <Card key={servico.id} onClick={(event) => { handleSelectServico(event,index) }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5 style={{textAlign: 'justify', marginRight: 10, marginBottom: 10}}>{servico.nome}</h5>
              <div style={{ cursor: 'pointer' }} >
                <FaTrash onClick={(event) => handleDeleteServico(event, servico.id)} style={{ height: '1em', width: '1em' }} />
              </div>

            </div>
            <img src={`${API_URL}/images/${servico.url}`} style={{ width: 40, height: 40 }} alt='imagem servico'/>
            
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.servico.loading,
    servicos: state.servico.servico,
    error: state.servico.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServico: () => dispatch(listarServicoRequest()),
    criarServico: (servico) => dispatch(criarServicoRequest(servico)),
    updateServico: (id, servico) => dispatch(updateServicoRequest(id, servico)),
    deleteServico: (id) => dispatch(deleteServicoRequest(id)),
    confirmacao: (title,text,onConfirm) => dispatch(showConfirmation(title,text,onConfirm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarServico)
