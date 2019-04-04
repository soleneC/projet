import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
import axios from 'axios';
//source
//https://apexcharts.com/react-chart-demos/radialbar-charts/multiple-radialbars/
export default class Widget5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
    }
  }

  componentDidMount() {
    this.sync();
  }

  render() {
    const { tracks } = this.state;

    const titres = [];
    const ecoutes = [];
    let e = 0;
    let ecoute = 0;

    const tot = tracks.reduce((tot, tracks) => tot + tracks.listenings, 0);

    tracks.forEach(t => {
      e = (t.listenings/tot)*100;
      ecoute = Math.round(e*100)/100;
      titres.push(t.title);
      ecoutes.push(ecoute);
    });

    const options = {
      theme: {
        palette: 'palette10',
        monochrome: {
          enabled: true,
          color: '#3F9EF9',
          shadeTo: 'light',
          shadeIntensity: 0.65
        },
      },

      title:{
        text: 'Pourcentage d\'écoutes par chanson',
        align: 'center',
        style: {
          fontSize:  '16px',
          color:  '#fff'

        },
      },

      labels: titres,
      stroke: {
        lineCap: "round"
      },

      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              offsetY: -10,
              fontSize: "25px"
            },
            value: {
              color: "#fff",
              fontSize: "15px",
              show: true
            },

            total: {
              show: true,
              label: 'Total',
              color:"#fff",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return tot
              }
            }
          }
        }
      }
    };

    const series = ecoutes;


    return (
      <div id="chart">
        <Chart options={options} series={series} type="radialBar" height="300" />
      </div>
    );
  }

  sync() {
    axios.get("http://localhost:8000/tracks/")
      .then((rep) => this.setState({tracks: rep.data }))
      .catch((err)=>{
        console.error(err);
        this.status(500).send({"errorServer": err})
      });
    }
}
