const React = require('react');
const PropTypes = require('prop-types');
const assert = require('assert');
const failOnReactWarn = require('./index');

class ComponentThatNeedsProp extends React.Component {
  render () {
    return (
      React.createElement('div', null, 'where is the prop?')
    );
  }
};

ComponentThatNeedsProp.propTypes = {
  needThis: PropTypes.string.isRequired,
};

describe('fail-on-react-warn', function() {
  it('Fails tests on react warnings', function() {
    failOnReactWarn('Warning:');
    assert.throws(() => React.createElement(ComponentThatNeedsProp));
  });
  
  it.skip('Returns a cleanup method that puts things back to normal', function() {
    const cleanup = failOnReactWarn('Warning:');
    cleanup();
    assert.doesNotThrow(() => React.createElement(ComponentThatNeedsProp));
  });
});
