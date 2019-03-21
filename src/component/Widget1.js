import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';

//source
//https://apexcharts.com/react-chart-demos/bar-charts/basic/

export default class Widget1 extends Component {

       constructor(props) {
        super(props);

        this.state = {
          options: {

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

              categories: ['Australia', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
              ],
              colors:['#919DC4'],

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
        },

          series:
          [{
            data: [200, 300, 450, 500, 550, 600, 700, 1100, 1200, 1380]
          }],
        }
      }

      render() {
        return (


          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height="350" />
          </div>
    );
  }
}
