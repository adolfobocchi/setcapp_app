import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from './styled';
import { criarLegislacaoRequest, listarLegislacaoRequest, updateLegislacaoRequest } from '../../store/modules/Legislacao/actions';
import EditorHtml from '../EditorHtml';

const LegislacaoForm = ({loading, legislacaos, error, fetchLegislacao, criarLegislacao, updateLegislacao}) => {
  const [legislacao, setLegislacao] = useState(legislacaos);
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: legislacao
      ? {
          id: legislacao.id,
          conteudo: legislacao.conteudo,
        }
      : {},
  });

  useEffect(() => {
    fetchLegislacao();
    setLegislacao(legislacaos);
  }, [legislacaos]);

  const onSubmit = (data) => {    
    if(data.id && data.id > 0) {
      updateLegislacao(data.id, data);
      fetchLegislacao();
    } else {
      criarLegislacao(data);
      fetchLegislacao();
    }
    
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Input
        hidden
        {...register('id')}
      />

      <Label>Legislacao</Label>
      <EditorHtml name="conteudo" control={control} defaultValue={legislacao?.conteudo}/>

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
