import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
import axios from 'axios';
//source
//https://apexcharts.com/react-chart-demos/pie-charts/simple-donut/
export default class Widget4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
    }
  }

  componentDidMount() {
    this.sync();
  }

  render() {
    const { artists } = this.state;

    const options = {
     theme: {
      palette: 'palette10',
      monochrome: {
        enabled: false,
        color: '#A300D6',
        shadeTo: 'light',
        shadeIntensity: 0.65
      },
    },


    responsive: [{
      breakpoint: 480,
      options: {

        chart: {
          width: 150
        },

        legend: {

          position: 'bottom'
        },

      }
    }],



    title: {
     text: 'Nombre d\'artistes par mois de naissance',
     align: 'center',

     floating: false,
     style: {
       fontSize: '16px',
       color:  '#fff'
     },
   },



   legend:{
     position:'bottom',
     labels: {
      colors: '#919DC4',
      useSeriesColors: false
    },
  }

};


const series = [2,1,1,1];
  


return (

  <div id="chart">
  <Chart options={options} series={series} type="donut" height="300" />
  </div>

  );

}
sync() {
  axios.get("http://localhost:8000/artists/Artistsbirth")
  .then((rep) => this.setState({ artists: rep.data }));
 
}
}