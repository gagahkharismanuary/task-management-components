import React from "react"
import { Months } from "./data/Months"

import "./assets/styles/main.scss"

const App = () => {
  // const [imageSearch, setImageSearch] = useState({})
  // const [inputSearch, setInputSearch] = useState("")

  // const handleChange = event => {
  //   setInputSearch(event.target.value)
  // };
  console.log(
    "Months: ",
    Months.map(month => month.events)
  )

  console.log(
    Months.filter(month => (
      (month.events === month.events) && (month.task === month.task)
    ))
  )

  // console.log('months lengt', month.events.length > 0)

  const result = Months.filter(month => (
    (month.events === month.events) && (month.task === month.task)
  ))
  return (
    <div className="App">
      <header className="App-header">
        <span>2019</span>
      </header>

      <section className="wrap-column">
      
        {Months.map((month, index) => (
          <div 
            key={index} 
            className="column"
          >
            <span>
              {month.name}
            </span>
          </div>
        ))}
        
      </section>
      <section className="wrap-column separator">
        <div className="divider1" />
        <div className="divider2" />
        <div className="divider3" />
      </section>

      <section className="wrap-column">
      {Months.map((month, index) => (
          <div 
            key={index} 
            className="column"
          >
            <label className="content">
              {
                month.events !== 0 && (
                  `${month.events} Events | ${month.task} Tasks`
                )
              }
             
            </label>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
