import React, { Component } from 'react';

import ErrorIndicator from '../errorIndicator';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <ErrorIndicator />
        </div>
      );
    }
    return this.props.children;
  }
}
