const heading1 = React.createElement(
  'h1',
  { style: { color: 'red' } },
  'hello'
);
const heading2 = React.createElement(
  'h2',
  { style: { color: 'pink' } },
  'hi there'
);
const container = React.createElement('div', { id: 'container' }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
