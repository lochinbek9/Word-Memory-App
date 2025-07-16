import Stats from '../Stats.jsx'
import CountDown from '../CountDown.jsx' 
import History from '../History.jsx'

function Dashboard(props) {
  const name = props
  return (
    <section id="dashboard" >
      <Stats {...props} />
      <CountDown {...props} />
      <History {...props}/>
    </section>
  )
}

export default Dashboard