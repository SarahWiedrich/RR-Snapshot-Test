import Container from './GitHubCard.js'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<Container/>).toJSON()
  expect(tree).toMatchSnapshot()
})