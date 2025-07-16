

function ProgressBar({text, remainder}) {
 
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="level">
      <div>
        <h4>{text}</h4>
      </div>
      {arr.map((item, index) => (
        <div className="level-bar" key={index}>
          
        </div>
        
      ))}
      <div className="xp" style={{ width: `${remainder}%` }}>
          
      </div>
    </div>
  )
}

export default ProgressBar