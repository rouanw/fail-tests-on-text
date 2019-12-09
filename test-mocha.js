const React = require('react');
const PropTypes = require('prop-types');
const assert = require('assert');
const failTestsOnText = require('./index');

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

describe('fail-tests-on-text', function() {
  it('Fails tests on react warnings', function() {
    failTestsOnText('Warning:');
    assert.throws(() => React.createElement(ComponentThatNeedsProp));
  });
  
  it.skip('Returns a cleanup method that puts things back to normal', function() {
    const cleanup = failTestsOnText('Warning:');
    cleanup();
    assert.doesNotThrow(() => React.createElement(ComponentThatNeedsProp));
  });
});
