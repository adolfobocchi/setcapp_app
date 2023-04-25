import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { Button, Form, Input, MapaArea, PageAreaContent, SectionArea } from '../components/styled';
import { criarContatoRequest } from '../store/modules/Contato/actions';
import { Label, TextArea } from '../components/contato/styled';

const API_URL = process.env.REACT_APP_URL_API;



const Home = ({ loading, criarContato, error }) => {
    const formEmpty = {
        id: '',
        nome: '',
        email: '',
        assunto: '',
        telefone: '',
        mensagem: ''
    }
    const [contato, setContato] = useState();
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: contato
    });


    const onSubmit = (data) => {

        criarContato(data);
        setContato({ ...formEmpty });

    }

    return (
        <>
            <Header />
            <Navbar />
            <SectionArea background='rgba(254,254,254,0.7)' altura={400} direcao={'row'} >
                <Form style={{flex: 1, margin: 10}} onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' >
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
                    <TextArea
                        {...register('mensagem', { required: true })}
                        rows={10}
                    />
                    {errors.mensagem && <span>Campo obrigatório</span>}

                    <Button type="submit">Enviar</Button>
                </Form>
                <MapaArea>
                
                </MapaArea>

            </SectionArea>
            <Footer />
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
        criarContato: (contato) => dispatch(criarContatoRequest(contato)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)