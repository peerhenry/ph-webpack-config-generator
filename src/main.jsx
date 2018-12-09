import { render } from 'react-dom'
import App from './View/App'
import store from './Logic/Config/ConfigStore'

const app = document.getElementById('app')
render(<App store={store}/>, app)