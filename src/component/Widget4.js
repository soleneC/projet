import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import './Widget.css';
//source
//https://apexcharts.com/react-chart-demos/pie-charts/simple-donut/
export default class Widget4 extends Component {
constructor(props) {
        super(props);

        this.state = {
          options: {
         /* fill:{
              colors:['#3F73CB','#f00']
            },*/

            theme: {
            palette: 'palette10',
           monochrome: {
            enabled: false,
             color: '#A300D6',
             shadeTo: 'light',
             shadeIntensity: 0.65
             },
            },

            legend:{
            	position:'bottom',



            	labels: {
                colors: '#919DC4',
                 useSeriesColors: false
                  },
            },

            title: {
               text: 'Nombre d\'albums par artiste',
               align: 'center',

               floating: false,
              style: {
               fontSize:  '16px',
               color:  '#fff'
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
            }]

          },


          series: [15, 60, 70, 15, 30]
        }
      }

      render() {
        return (


          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="donut" height="300" />
          </div>

    );
  }
}
