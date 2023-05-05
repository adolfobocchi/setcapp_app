import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from './styled';
import { criarLegislacaoRequest, listarLegislacaoRequest, updateLegislacaoRequest } from '../../store/modules/Legislacao/actions';
import EditorHtml from '../EditorHtml';
import Modal from '../Modal';

const LegislacaoForm = ({ loading, legislacaos, error, fetchLegislacao, criarLegislacao, updateLegislacao }) => {
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: legislacaos
      ? {
        id: legislacaos.id,
        conteudo: legislacaos.conteudo,
      }
      : {},
  });


  useEffect(() => {
    fetchLegislacao();
  }, [fetchLegislacao]);

  useEffect(() => {
    reset({...legislacaos});
  }, [reset, legislacaos]);


  const onSubmit = (data) => {
    if (data.id && data.id > 0) {
      updateLegislacao(data.id, data);
    } else {
      criarLegislacao(data);

    }
    fetchLegislacao();
  }

  if (loading) {
    return <Modal />
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Input
        hidden
        {...register('id')}
      />

      <Label>Legislacao</Label>
      <EditorHtml name="conteudo" control={control} defaultValue={legislacaos?.conteudo} />
      {errors.conteudo && <span>Erro</span>}

      <Button type="submit">Salvar</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.legislacao.loading,
    legislacaos: state.legislacao.legislacao,
    error: state.legislacao.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLegislacao: () => dispatch(listarLegislacaoRequest()),
    criarLegislacao: (legislacao) => dispatch(criarLegislacaoRequest(legislacao)),
    updateLegislacao: (id, legislacao) => dispatch(updateLegislacaoRequest(id, legislacao))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LegislacaoForm);
