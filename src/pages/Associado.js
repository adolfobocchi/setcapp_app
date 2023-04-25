import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { Button, Form, Input, MapaArea, SectionArea } from '../components/styled';
import { criarAssociadoRequest } from '../store/modules/Associado/actions';
import { Label } from '../components/contato/styled';
import { useEffect } from 'react';

const API_URL = process.env.REACT_APP_URL_API;



const Home = ({ loading, criarAssociado, error }) => {
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
    const [associado, setAssociado] = useState(formEmpty);
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: associado
    });



    useEffect(() => {
        reset({ ...associado });
    }, [associado])

    const onSubmit = (data) => {

        criarAssociado(data);
        setAssociado({ ...formEmpty });

    }

    return (
        <>
            <Header />
            <Navbar />
            <SectionArea background='rgba(254,254,254,0.7)' altura={400} direcao={'row'} >
                <Form style={{ flex: 1, margin: 10 }} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
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
                </Form>

            </SectionArea>
            <Footer />
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
        criarAssociado: (associado) => dispatch(criarAssociadoRequest(associado)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)