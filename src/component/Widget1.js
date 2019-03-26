import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
import axios from 'axios';

//source
//https://apexcharts.com/react-chart-demos/bar-charts/basic/

export default class Widget1 extends Component {
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
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },

      fill:{
        colors:['#3F73CB']
      },

      title: {
        text: 'Nombre total de likes par artiste',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '16px',
          color:  '#fff'
        },
      },

      dataLabels: {
        enabled: false,
        colors:'#919DC4'
      },

      xaxis: {
        categories: artists.map((a) => a.name),
        colors: ['#919DC4'],

        labels: {
          show: true,
          style: {
            colors: '#919DC4',
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#919DC4', '#919DC4','#919DC4','#919DC4','#919DC4','#919DC4','#919DC4','#919DC4','#919DC4','#919DC4'],
            fontSize: '12px',
          },
        },
      },
    };
    const series = [
      {
        data: artists.map((a) => a.followers)
      },
    ];

    return (
      <div id="chart">
        <Chart options={options} series={series} type="bar" height="350" />
      </div>
    );
  }

  sync() {
    axios.get("http://localhost:8000/artists/")
      .then((rep) => this.setState({ artists: rep.data }));
  }
}
