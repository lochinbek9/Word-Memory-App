
export default function Welcome({ handleCreateAccount, name, setName }) {
  return (
    <section id="welcome" className="welcome">
         <h3 className="text-large special-shadow">
           365 days. <br /> 365 words.
         </h3>
         <h6>Build your lexicon. <br />
          start your challange today!
         </h6>
         <div>
            <input type="text" placeholder="Enter your name..." value={name} onChange={(e) =>{setName(e.target.value)}} />
            <button disabled={!name} onClick={handleCreateAccount}>Start &rarr;</button>
         </div>
    </section>
  )
}

