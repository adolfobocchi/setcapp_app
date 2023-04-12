// ListarContato.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarContatoRequest, listarContatoRequest, updateContatoRequest } from '../../store/modules/Contato/actions'
import { Button, Card, Container, Form, Image, Input, Label } from './styled'

const API_URL = 'http://localhost:3001';

const ListarContato = ({ loading, contatos, error, fetchContato, criarContato, updateContato }) => {
  const formEmpty = {
    id: '',
    nome: '',
    email: '',
    assunto: '',
    telefone: '',
    mensagem: ''
  }
  const [contatoSelected, setContatoSelected] = useState(formEmpty);
  const [contatosList, setContatosList] = useState([]);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: contatoSelected
  });


  useEffect(() => {
    fetchContato()
    setContatosList(contatos);
  }, [contatos]);

  useEffect(() => {
    reset({...contatoSelected});
  }, [contatoSelected])


  const handleSelectContato = (index) => {
    setContatoSelected(contatos[index]);

  }

  const handleClearContato = () => {
    setContatoSelected({...formEmpty})
  }

  const handleDeleteContato = (index) => {
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('contato', JSON.stringify(data));

    if (data.id && data.id > 0) {
      updateContato(data.id, formData);

    } else {
      criarContato(formData);
    }

  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
        <Input
          hidden
          {...register('id')}
        />
        
        <Label>Nome</Label>
        <Input
          {...register('nome', { required: true })}
        />
        {errors.nome && <span>Campo obrigatório</span>}
        <Label>Email</Label>
        <Input
          {...register('email', { required: true })}
        />
        {errors.email && <span>Campo obrigatório</span>}
        <Label>Telefone</Label>
        <Input
          {...register('telefone', { required: true })}
        />
        {errors.telefone && <span>Campo obrigatório</span>}
        <Label>Assunto</Label>
        <Input
          {...register('assunto', { required: true })}
        />
        {errors.assunto && <span>Campo obrigatório</span>}
        <Label>Mensagem</Label>
        <Input
          {...register('mensagem', { required: true })}
        />
        {errors.mensagem && <span>Campo obrigatório</span>}

        <Button type="submit">Salvar</Button>
        <Button type="button" onClick={handleClearContato}>Limpar</Button>
      </Form>
      <Container>
        {contatosList?.map((contato, index) => (
          <Card key={contato.id} onClick={() => { handleSelectContato(index) }} >
            <h3>{contato.nome}</h3>            
            <button onClick={() => { handleDeleteContato(index) }}>Delete</button>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.contato.loading,
    contatos: state.contato.contato,
    error: state.contato.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContato: () => dispatch(listarContatoRequest()),
    criarContato: (contato) => dispatch(criarContatoRequest(contato)),
    updateContato: (id, contato) => dispatch(updateContatoRequest(id, contato))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarContato)
