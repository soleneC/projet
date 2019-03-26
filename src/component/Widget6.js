import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
import axios from 'axios';

//source
//https://apexcharts.com/react-chart-demos/radialbar-charts/semi-circle-gauge/

export default class Widget6 extends Component {
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


   const { artists } = this.state;


   const options = {

    plotOptions: {

      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                  value: {
                    offsetY: 15,
                    color: "#fff",
                    fontSize: "25px",
                    show: true

                  }
                }
              }

            },

            title:{
              text: 'Pourcentage de musiques ayant plus de 10 000 likes',
              align: 'center',
              style: {
                fontSize:  '16px',
                color:  '#fff'

              },

              fill: {
                type: 'gradient',
                colors:['#3F73CB'],
                gradient: {
                  shade: 'light',
                  shadeIntensity: 0.4,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 53, 91]
                },
              },

              labels: ['Average Results'],
            },
          };


          const series = [40];


          return (


            <div id="chart">
            <Chart options={options} series={series} type="radialBar" height="300" />
            </div>

            );

          }
          sync() {
            axios.get("http://localhost:8000/tracks/",{

            params: {
            likes: {$gte :10000}
             }})

             
            .then((rep) => this.setState({ tracks: rep.data }));
          }
        }