import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
import axios from 'axios';

//source
//https://apexcharts.com/react-chart-demos/line-charts/gradient/
export default class Widget3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    this.sync();
  }

  render() {
    const { albums } = this.state;

    const options = {
      chart: {
        type: 'line',
        shadow: {
          enabled: false,
          color: 'black',
          top: 3,
          left: 2,
          blur: 3,
          opacity: 1
        },
      },

      stroke: {
        width: 7,
        curve: 'smooth'
      },

      xaxis: {
        type: 'datetime',
        categories: albums.map((al) => al.release),

        labels: {
          show: true,
          style: {
            colors: '#919DC4',
            fontSize: '12px',
          },
        },
      },

      title: {
        text: 'Nombre d\'albums réalisés par an dans le monde',
        align: 'left',
        style: {
          fontSize: "16px",
          color: '#fff'
        }
      },

      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#fff'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },

      markers: {
        size: 5,
        opacity: 0.9,
        colors: ["#3F9EF9"],
        strokeColor: "#fff",
        strokeWidth: 2,

        hover: {
          size: 7,
        }
      },

      yaxis: {
        min: -10,
        max: 40,
        colors:['#3F9EF9','#3F9EF9','#3F9EF9','#3F9EF9'],
        title: {
          text: 'Albums',
          style: {
            color: '#3F9EF9',
            fontSize: '12px',
          },
        },

        labels: {
         show: true,
         minWidth: 0,
         maxWidth: 160,
           style: {
              color: '#919DC4',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              cssClass: 'apexcharts-yaxis-label',
            },
          },
        }
      };

      const numAlbums = albums.map((al) => al.estimatedDocumentCount());

      const series = [{
        name: 'Albums',
        data: numAlbums

      },
    ];

    return (
      <div id="chart">
        <Chart options={options} series={series} type="line" height="350" />
      </div>
    );
}

  sync() {
    axios.get("http://localhost:8000/albums/")
      .then((rep) => this.setState({albums: rep.data }))
      .catch((err)=>{
		      console.error(err);
          this.status(500).send({"errorServer": err})
	       });
  }
}
