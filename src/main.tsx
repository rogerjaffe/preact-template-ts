import { render } from 'preact'
import App from './views/App'
import './index.css'

render(<App />, document.getElementById('root') as HTMLElement)
