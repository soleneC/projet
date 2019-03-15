import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
//source
//https://apexcharts.com/react-chart-demos/line-charts/gradient/
export default class Widget3 extends Component {

      constructor(props) {
      super(props);

      this.state = {
        options: {
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
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000',
              '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001',
              '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'
            ],

            labels: {
            show: true,


            style: {
                colors: '#919DC4',
                fontSize: '12px',

            },
          },
          },


          title: {
            text: 'Widget numéro 3',
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
              text: 'Engagement',
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
        },

        series: [{
          name: 'Likes',

          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]

        }],
      }
    }

    render() {

      return (


          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="line" height="350" />
          </div>
    );
  }
}
