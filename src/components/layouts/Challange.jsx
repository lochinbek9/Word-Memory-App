
import ProgressBar from '../ProgressBar';
function Challange() {
  
  const word = 'copacetic';
  const definition = 'In excellent order';
  return (
    <section id="challange">
      <h1>{word}</h1>
      <p>{definition}</p>
      <div className="helper">
        <div>
          {[...Array(definition.length).keys()].map((element, elementIndex) =>(
          <div key={elementIndex}>a</div>
          ))}
        </div>
        <input type="text" placeholder="Enter the defition" />
      </div>

      <div className="challenge-btns">
        <button className="card-button-secondary">
          <h6>Quit</h6>
        </button>
        <button className="card-button-primary">
          <h6>I forgot</h6>
        </button>
      </div>
      <ProgressBar/>
    </section>
  )
}

export default Challange