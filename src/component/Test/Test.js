import React, {Component} from 'react';

class Test extends Component {

  render() {
    const { selectAuthor, data } = this.props;
    return (
      <div>
        <button onClick={() => selectAuthor(1)}>ON</button>
        <h2>{data}</h2>
      </div>
    );
  }
}

Test.propTypes = {};

export default Test;