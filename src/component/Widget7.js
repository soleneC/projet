import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Widget.css';
import axios from 'axios';

//source
//https://apexcharts.com/react-chart-demos/bar-charts/basic/

export default class Widget7 extends Component {
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
    const nb_followers = artists.reduce((tot, artists) => tot + artists.followers, 0);

    return (
      <div id="widget_7">
        <h1 className="titre center">Nombre de followers au total</h1>
        <p className="p_w7">{nb_followers}</p>
      </div>
    );
  }

  sync() {
    axios.get("http://localhost:8000/artists/")
      .then((rep) => this.setState({ artists: rep.data }))

      .catch((err)=>{
		      console.error(err);
          this.status(500).send({"errorServer": err})
	       });
  }
}
