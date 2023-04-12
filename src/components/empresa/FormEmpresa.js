import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { criarEmpresaRequest, listarEmpresaRequest, updateEmpresaRequest } from '../../store/modules/Empresa/actions';
import { connect } from 'react-redux';
import { Button, Form, Image, Input, Label } from './styled';
import EditorHtml from '../EditorHtml';

const API_URL = 'http://localhost:3001';


const EmpresaForm = ({loading, empresas, error, fetchEmpresas, criarEmpresa, updateEmpresa}) => {
  const [empresa, setEmpresa] = useState(empresas);
  const { register, control, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: empresa
      ? {
          id: empresa.id,
          nome: empresa.nome,
          endereco: empresa.endereco,
          numero: empresa.numero,
          bairro: empresa.bairro,
          cidade: empresa.cidade,
          estado: empresa.estado,
          cep: empresa.cep,
          telefone: empresa.telefone,
          logo: empresa.logo,
          whatsapp: empresa.whatsapp,
          instagram: empresa.instagram,
          facebook: empresa.facebook,
          linkedin: empresa.linkedin,
          email: empresa.email,
          latitude: empresa.latitude,
          longitude: empresa.longitude,
          institucional: empresa.institucional,
          diretoria: empresa.diretoria,
          territorio: empresa.territorio,

        }
      : {},
  });
  
  useEffect(() => {
    fetchEmpresas();
    setEmpresa(empresas)
  }, [empresas]);

  const onSubmit = (data) => {
    
    const formData = new FormData();
    for (const key of Object.keys(data.files)) {
      formData.append('imagens', data.files[key])
    }
    formData.append("logoFile", data.logoFile[0]);
    formData.append("territorioFile", data.territorioFile[0]);
    formData.append('empresa', JSON.stringify(data));

    
    if(data.id && data.id > 0) {
      updateEmpresa(data.id, formData);
    } else {
      criarEmpresa(formData);
    }
    
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Input
        hidden
        {...register('id')}
      />
      <Label>Nome</Label>
      <Input
        {...register('nome', { required: true })}
      />
      {errors.nome && <span>Campo obrigatório</span>}

      <Label>Endereço</Label>
      <Input
        {...register('endereco', { required: true })}
      />
      {errors.endereco && <span>Campo obrigatório</span>}

      <Label>Numero</Label>
      <Input {...register('numero', { required: true })} />
      {errors.numero && <span>Campo obrigatório</span>}

      <Label>Bairro</Label>
      <Input {...register('bairro', { required: true })} />
      {errors.bairro && <span>Campo obrigatório</span>}

      <Label>Cidade</Label>
      <Input {...register('cidade', { required: true })} />
      {errors.cidade && <span>Campo obrigatório</span>}

      <Label>Estado</Label>
      <Input {...register('estado', { required: true })} />
      {errors.estado && <span>Campo obrigatório</span>}

      <Label>Cep</Label>
      <Input {...register('cep', { required: true })} />
      {errors.cep && <span>Campo obrigatório</span>}

      <Label>Telefone</Label>
      <Input {...register('telefone', { required: true })} />
      {errors.telefone && <span>Campo obrigatório</span>}

      <Label>Logo</Label>
      <Input  type='file' name='logoFile' {...register('logoFile', { required: false })} />
      {errors.logo && <span>Campo obrigatório</span>}
      {empresa?.logo && 
        <Image src={`${API_URL}/images/${empresa?.logo || null}`} />
      }
      
      
      <Label>Whatsapp</Label>
      <Input {...register('whatsapp', { required: true })} />
      {errors.whatsapp && <span>Campo obrigatório</span>}

      <Label>Instagram</Label>
      <Input {...register('instagram', { required: true })} />
      {errors.instagram && <span>Campo obrigatório</span>}

      <Label>Facebook</Label>
      <Input {...register('facebook', { required: true })} />
      {errors.facebook && <span>Campo obrigatório</span>}

      <Label>Linkedin</Label>
      <Input {...register('linkedin', { required: true })} />
      {errors.linkedin && <span>Campo obrigatório</span>}

      <Label>E-mail</Label>
      <Input {...register('email', { required: true })} />
      {errors.email && <span>Campo obrigatório</span>}

      <Label>Latitude</Label>
      <Input {...register('latitude', { required: true })} />
      {errors.latitude && <span>Campo obrigatório</span>}

      <Label>Longitude</Label>
      <Input {...register('longitude', { required: true })} />
      {errors.longitude && <span>Campo obrigatório</span>}

      <Label>Institucional</Label>
      <EditorHtml name="institucional" control={control} defaultValue={empresa?.institucional} />

      <Label>Diretoria</Label>
      <EditorHtml name="diretoria" control={control} defaultValue={empresa?.diretoria} />
      
      <Label>Territorio</Label>
      <Input  type='file' name='territorioFile' {...register('territorioFile', { required: false })} />
      {errors.logo && <span>Campo obrigatório</span>}

      {empresa?.territorio && 
        <Image src={`${API_URL}/images/${empresa?.territorio || null}`} />
      }
      


      <Label>Fotos</Label>
        <Input type='file' multiple name='files' {...register('files', { required: false })} />
        {errors.logo && <span>Campo obrigatório</span>}
        {empresa?.imagens?.map(imagem => {
              return (<img key={imagem.id} src={`http://localhost:3001/images/${imagem.url}`} style={{ width: 40, height: 40 }} />)
            })}

      <Button type="submit">Salvar</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.empresa.loading,
    empresas: state.empresa.empresa,
    error: state.empresa.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEmpresas: () => dispatch(listarEmpresaRequest()),
    criarEmpresa: (empresa) => dispatch(criarEmpresaRequest(empresa)),
    updateEmpresa: (id, empresa) => dispatch(updateEmpresaRequest(id, empresa))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaForm);
