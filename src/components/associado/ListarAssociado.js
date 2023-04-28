// ListarAssociado.js

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { criarAssociadoRequest, deleteAssociadoRequest, listarAssociadoRequest, updateAssociadoRequest } from '../../store/modules/Associado/actions'
import { Button, Card, Container, Form, Input, Label } from './styled'
import Modal from '../Modal';

const ListarAssociado = ({ loading, associados, error, fetchAssociado, criarAssociado, updateAssociado, deleteAssociado }) => {
  const formEmpty = {
    id: '',
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    email: '',
    responsavel: '',
    dataInicioAtividade: '',
    ie: '',
    im: '',
    cargacomum: false,
    mudanca: false,
    bebidas: false,
    containers: false,
    explosivos: false,
    gases: false,
    encomendas: false,
    cargagranelsolida: false,
    cargagranelliquida: false,
    cargaviva: false,
    cargaaquecida: false,
    solidosInflamaveis: false,
    substanciasToxicas: false,
    veiculosAutomotores: false,
    frigorificas: false,
    valores: false,
    corrosiva: false,
    diversas: false,
  }
  const [associadoSelected, setAssociadoSelected] = useState(formEmpty);
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: associadoSelected
  });


  useEffect(() => {
    fetchAssociado()
  }, []);

  useEffect(() => {
    reset({...associadoSelected});
  }, [reset, associadoSelected])


  const handleSelectAssociado = (index) => {
    setAssociadoSelected(associados[index]);

  }

  const handleClearAssociado = () => {
    setAssociadoSelected({...formEmpty})
  }

  const handleDeleteAssociado = (index) => {
    deleteAssociado(index);
    setAssociadoSelected({...formEmpty})
  }

  const onSubmit = (data) => {

    if (data.id && data.id > 0) {
      updateAssociado(data.id, data);

    } else {
      criarAssociado(data);
    }
    setAssociadoSelected({...formEmpty});

  }

  if(loading) {
    return <Modal />
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
                    {
                        Object.keys(formEmpty).map((field, index) => {
                            if (field === 'id') {
                                return <Input
                                    hidden
                                    {...register('id')}
                                />
                            } else {

                                if (formEmpty[field] === false) {
                                    return (<>
                                        <Label>{field}</Label>
                                        <Input
                                            type='checkbox'
                                            {...register(field)}
                                        />
                                        {errors[field] && <span>Campo obrigatório</span>}
                                    </>)
                                } else {
                                    if (field.includes('data')) {
                                        return (<>
                                            <Label>{field}</Label>
                                            <Input
                                                type='date'
                                                {...register(field)}
                                            />
                                            {errors[field] && <span>Campo obrigatório</span>}
                                        </>)
                                    } else {
                                        return (
                                            <>
                                                <Label>{field}</Label>
                                                <Input
                                                    {...register(field, { required: true })}
                                                />
                                                {errors[field] && <span>Campo obrigatório</span>}
                                            </>
                                        )
                                    }

                                }

                            }


                        })
                    }

        <Button type="submit">Enviar</Button>
        <Button type="button" onClick={handleClearAssociado}>Limpar</Button>
                </Form>
      <Container>
        {associados?.lenght > 0 && associados?.map((associado, index) => (
          <Card key={associado.id} onClick={() => { handleSelectAssociado(index) }} >
            <h3>{associado.razaoSocial}</h3>            
            <button onClick={() => {handleDeleteAssociado(associado.id)}}>Delete</button>
          </Card>
        ))}
      </Container>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loading: state.associado.loading,
    associados: state.associado.associado,
    error: state.associado.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAssociado: () => dispatch(listarAssociadoRequest()),
    criarAssociado: (associado) => dispatch(criarAssociadoRequest(associado)),
    updateAssociado: (id, associado) => dispatch(updateAssociadoRequest(id, associado)),
    deleteAssociado: (id) => dispatch(deleteAssociadoRequest(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListarAssociado)
