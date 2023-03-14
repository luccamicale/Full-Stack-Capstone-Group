import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../pages/NavBar';
import store from '../redux/store';

test('NavBar renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <NavBar />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});