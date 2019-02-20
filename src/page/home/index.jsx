import React, { Component } from 'react';
import Layout from '../../component/layout.jsx';

export default class ListIndex extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <Layout>
      <div className="main">
        <div className="page-container page-component">
          <h1>React Render Service Demo</h1>
        </div>
      </div>
    </Layout>;
  }
}