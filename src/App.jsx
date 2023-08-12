
import './App.css'
import Landing from './components/Landing'
import Feature_1 from './components/Feature_1'
import Feature_2 from './components/Feature_2'
import Feature_3 from './components/Feature_3'
import Dependence from './components/Dependence'

export default function App() {
  return (
    <div>
      <Landing />
      <div className="features">
        <Feature_1 />
        <Feature_2 />
        <Feature_3 />
      </div>
      <Dependence />
    </div>
  )
}


