const test = require('tape');
const React = require('react');
const PropTypes = require('prop-types');
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

test('Fails tests on react warnings', (t) => {
  failOnReactWarn();
  t.plan(1);
  t.throws((() => React.createElement(ComponentThatNeedsProp)));
  t.end();
});

test.skip('Returns a cleanup method that puts things back to normal', (t) => {
  const cleanup = failOnReactWarn();
  t.plan(2);
  t.throws((() => React.createElement(ComponentThatNeedsProp)));
  cleanup();
  t.doesNotThrow((() => React.createElement(ComponentThatNeedsProp)));
  t.end();
});
