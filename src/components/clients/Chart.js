import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {
        charData:{}
    }
}

    static getDerivedStateFromProps(props){
        const { clients } = props;

        if(clients){
            let name = [];
            let balance= [];
            clients.forEach(client => {
            name.push(client.firstName);
            balance.push(parseFloat(client.balance))
            })
            const char = {
                labels: name,
                datasets:[{
                        label: 'Balance',
                        data: balance,
                        backgroundColor: '#6FE8FF'
                    }
                ]
            }
            return {  charData: char }
        }
        return null;
    }

  render() {
    const {clients} = this.props;
    const {charData} = this.state
    if(clients){
    return (
        <div className="chart">
        <Bar
        data={charData}
        options={{}}
            />
        <br/>
        <Line data={charData}></Line>
        <Pie data={charData}></Pie>
      </div>

    )
    }else {
       return <Spinner></Spinner>
    }
  }
}

Chart.propTypes = {
    firestore: PropTypes.object.isRequired,
    clients: PropTypes.array
}

export default  compose(
    firestoreConnect([{ collection: 'clients'}]),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients
    }))
) (Chart);