import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
//source
//https://apexcharts.com/react-chart-demos/radialbar-charts/multiple-radialbars/
export default class Widget5 extends Component {
constructor(props) {
        super(props);

        this.state = {
          options: {
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
              text: 'Pourcentage d\'écoutes par chanson pour un album',
               align: 'center',
               style: {
            fontSize:  '16px',
               color:  '#fff'

        },
            },

            labels: ['chanson1', 'chanson2', 'chanson3', 'chanson4'],
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
                    return 249
                  }
                }
              }
            }
          }
          },
          series: [50, 55, 70, 60],

        }
      }

      render() {
        return (


          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="radialBar" height="300" />
          </div>

    );
  }
}
