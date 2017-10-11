import React, { Component } from 'react';
import DisplayingData from './DisplayingData';

class ListRender extends Component {

    componentWillMount() {
      this.state = { loading: false, data: [], page: 1, seed: 1, error: null, refreshing: false };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=30`;
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      };
      
      render() {
        // console.log(this.state.data);
        return (
          <DisplayingData data={this.state.data} />
        );
      }
    }

export default ListRender;
