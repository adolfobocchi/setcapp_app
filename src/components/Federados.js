import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listarConfederadoRequest } from '../store/modules/Confederado/actions';

const Home = ({loadin, confederados, fetchConfederado}) => {
    const [confederado, setConfederado] = useState(confederados);
    useEffect(() => {
        fetchConfederado();
        setConfederado(confederados)
    }, [fetchConfederado, confederados])
    return(
      <section>
        <ul>
        {
            
            confederado.map((item, index) => {
                return <li key={item.id}>{item.nome}</li>
            })
        }
        </ul>
        </section>
    )
}

const mapStateToProps = state => {
    return {
      loading: state.confederado.loading,
      confederados: state.confederado.confederado,
      error: state.confederado.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchConfederado: () => dispatch(listarConfederadoRequest()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)