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

    const ans = [];
    const nbs = [];
    const ajd = (new Date()).getFullYear();

    for (let i = 0; i < 20; ++i) {
      const an = ajd - i;
      ans.push(`01/01/${an}`);

      let nb = 0;
      albums.forEach(a => {
        if (new Date(a.release).getFullYear() === an) {
          nb++;
        }
      });

      nbs.push(nb);
    }

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
        categories: ans,

        labels: {
          show: true,
          style: {
            colors: '#919DC4',
            fontSize: '12px',
          },
        },
      },

      title: {
        text: 'Nombre d\'albums réalisés par an',
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
        min: 0,
        max: 10,
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
        },

        responsive: [{
          breakpoint: 500,
          options: {
            title: {
              text: 'Nombre d\'albums réalisés par an',
              align: 'left',
              style: {
                fontSize: "12px",
                color: '#fff'
              }
            }

          },
        }]
      };

      const series = [{
        name: 'Albums',
        data: nbs

      }];

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
