import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';

const withData = (View, getData) =>
  class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      this.setState({ loading: true });

      getData()
        .then((data) => {
          this.setState({
            data,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };

export default withData;
