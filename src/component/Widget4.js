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
    const tousmois =[];
    let mois ='';

   artists.forEach(t => {
      if (t._id ==1)
      {
         mois = 'Janvier';
         tousmois.push(mois);
      }
      if (t._id == 2)
      {
         mois = 'Février';
         tousmois.push(mois);
      }
      if (t._id == 3)
      {
         mois = 'Mars';
         tousmois.push(mois);
      }
      if (t._id == 4)
      {
         mois = 'Avril';
         tousmois.push(mois);
      }
      if (t._id == 5)
      {
         mois = 'Mai';
         tousmois.push(mois);
      }
      if (t._id == 6)
      {
         mois = 'Juin';
         tousmois.push(mois);
      }
      if (t._id == 7)
      {
         mois = 'Juillet';
         tousmois.push(mois);
      }
      if (t._id == 8)
      {
         mois = 'Août';
         tousmois.push(mois);
      }
      if (t._id == 9)
      {
         mois = 'Septembre';
         tousmois.push(mois);
      }
      if (t._id == 10)
      {
         mois = 'Octobre';
         tousmois.push(mois);
      }
      if (t._id == 11)
      {
         mois = 'Novembre';
         tousmois.push(mois);
      }
      if (t._id == 12)
      {
         mois = 'Décembre';
         tousmois.push(mois);
      }

    });

    const options = {

      labels: tousmois,

      
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
     offsetY: -10,
     floating: true,
     labels: {
      colors: '#919DC4',
      useSeriesColors: false
    },
  }

};


const series = artists.map((a) => a.count);
  


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