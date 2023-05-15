import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, MapaArea, SectionArea } from '../components/styled';
import { criarAssociadoRequest } from '../store/modules/Associado/actions';
import { Label } from '../components/contato/styled';
import { useEffect } from 'react';

const Home = ({ loading, criarAssociado, error }) => {
    const formOptions = {
        id: { label: 'id', value: '', tipo: 'text', hidden: true },
        razaoSocial: { label: 'Razão Social', value: '', tipo: 'text', required: true },
        nomeFantasia: { label: 'Nome Fantasia', value: '', tipo: 'text', required: true },
        endereco: { label: 'Endereço', value: '', tipo: 'text', required: true },
        cidade: { label: 'Cidade', value: '', tipo: 'text', required: true },
        estado: { label: 'Estado', value: '', tipo: 'text', required: true },
        bairro: { label: 'Bairro', value: '', tipo: 'text', required: true },
        cep: { label: 'Cep', value: '', tipo: 'text', required: true },
        telefone: { label: 'Telefone', value: '', tipo: 'text', required: true },
        celular: { label: 'Celular', value: '', tipo: 'text', required: true },
        email: { label: 'E-mail', value: '', tipo: 'email', required: true },
        cnpj: { label: 'Cnpj', value: '', tipo: 'text', required: true },
        ie: { label: 'Inscrição Estadual', value: '', tipo: 'text', required: true },
        juntacomercial: { label: 'Registro da Junta Comercial nº', value: '', tipo: 'text', required: true },
        dataInicioAtividade: { label: 'Inicio Atividade', value: '', tipo: 'date', required: true },
        matriz: { label: 'Matriz', value: false, tipo: 'checkbox', required: true },
        veiculos: { label: 'Quantidade de veiculos', value: '', tipo: 'number', required: true },
        funcionarios: { label: 'Numero de funcionários', value: '', tipo: 'number', required: true },
        responsavel: { label: 'Responsavel', value: '', tipo: 'text', required: true },
        cargacomum: { label: 'Carga Comun', value: false, tipo: 'checkbox', required: false },
        cargaliquidagranel: { label: 'Carga Liquida a Granel', value: false, tipo: 'checkbox', required: false },
        cargasolidagranel: { label: 'Carga Solida a Granel', value: false, tipo: 'checkbox', required: false },
        cargaindivisiveis: { label: 'Cargas Indivisiveis e Excedentes em Peso/Dimensões', value: false, tipo: 'checkbox', required: false },
        cargaaquecida: { label: 'Carga Aquecida', value: false, tipo: 'checkbox', required: false },
        cargasiderurgica: { label: 'Produtos Siderúrgicos e Bobinas em geral', value: false, tipo: 'checkbox', required: false },
        cargamadeiras: { label: 'Madeiras, em toras, Postes e Tubos', value: false, tipo: 'checkbox', required: false },
        cargaviva: { label: 'Animais Vivos', value: false, tipo: 'checkbox', required: false },
        cargaperecivel: { label: 'Produtos pereciveis e temperatura controlada', value: false, tipo: 'checkbox', required: false },
        cargalixo: { label: 'Lixo', value: false, tipo: 'checkbox', required: false },
        cargavalores: { label: 'Valores em unidades blindadas', value: false, tipo: 'checkbox', required: false },
        cargaconcreto: { label: 'Concreto em execução (betoneira)', value: false, tipo: 'checkbox', required: false },
        cargaveiculos: { label: 'Veiculos automotores', value: false, tipo: 'checkbox', required: false },
        cargacontainer: { label: 'Containers', value: false, tipo: 'checkbox', required: false },
        cargaoutros: { label: 'Outros a citar', value: false, tipo: 'checkbox', required: false },
      }
      const formEmpty = {
        id: '',
        razaoSocial: '',
        nomeFantasia: '',
        endereco: '',
        cidade: '',
        estado: '',
        bairro: '',
        cep: '',
        telefone: '',
        celular: '',
        email: '',
        cnpj: '',
        ie: '',
        juntacomercial: '',
        dataInicioAtividade: '',
        matriz: false,
        veiculos: '',
        funcionarios: '',
        responsavel: '',
        cargacomum: false,
        cargaliquidagranel: false,
        cargasolidagranel: false,
        cargaindivisiveis: false,
        cargaaquecida: false,
        cargasiderurgica: false,
        cargamadeiras: false,
        cargaviva: false,
        cargaperecivel: false,
        cargalixo: false,
        cargavalores: false,
        cargaconcreto: false,
        cargaveiculos: false,
        cargacontainer: false,
        cargaoutros: false,
    
      }
    const [associado, setAssociado] = useState(formEmpty);
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: associado
    });

    useEffect(() => {
        reset({ ...associado });
    }, [reset, associado])

    const handleClearAssociado = () => {
        setAssociado({ ...formEmpty })
    }

    const onSubmit = (data) => {
            criarAssociado(data);
          
          handleClearAssociado();
    }

    return (
        <>
            <SectionArea background='rgba(254,254,254,0.7)' altura={400} direcao={'row'} >
                <Form style={{ flex: 1, margin: 10 }} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
                    {
                        Object.keys(formEmpty).map((field, index) => {
                            const { label, tipo, required, hidden } = formOptions[field];
                            return <>
                              {!hidden && <Label>{`${label} `}{required && <small style={{ fontWeight: 400, color: 'red' }}>*</small>}</Label>}
                              <Input
                                name={field}
                                type={tipo}
                                hidden={hidden}
                                {...register(field, { required: required })}
                              />
                              {errors[field] && <span>Campo obrigatório</span>}
                            </>
                          })
                    }
                    <Button type="submit">Enviar</Button>
                </Form>

            </SectionArea>
        </>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.associado.loading,
        associados: state.associado.associados,
        error: state.associado.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        criarAssociado: (associado) => dispatch(criarAssociadoRequest(associado)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)