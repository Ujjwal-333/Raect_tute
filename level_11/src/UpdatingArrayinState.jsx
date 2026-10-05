import React, { useState } from 'react'

const UpdatingArrayinState = () => {

  const [data, setData] = useState([
    "ujjwal",
    "dinesh",
    "rahul",
    "purav",
    "Rakesh"
  ])

  const [dataDetails, setDataDetails] = useState([
    {
      name: "ujjwal",
      age: 22,
    },
    {
      name: "raghav",
      age: 25,
    },
    {
      name: "champak",
      age: 26,
    }
  ])

  const handleAge = (age) => {
    dataDetails[dataDetails.length - 1].age = age
    console.log(dataDetails)
    setDataDetails([...dataDetails])
  }

  const handleUser = (name) => {
    data[data.length - 1] = name
    console.log(data)
    setData([...data])
  }

  return (
    <>
      <h1>Updating Array in State</h1>

      <input
        type="text"
        placeholder="enter last User name"
        onChange={(e) => handleUser(e.target.value)}
      />

      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />
      {/* 🧠 e.target.value = "Jis input par event hua, uske andar abhi kya likha hai?" */}
      <input
        type="text"
        placeholder="Details"
        onChange={(e) => handleAge(e.target.value)}
      />

      {
        dataDetails.map((item, index) => (
          <h3 key={index}>
            {item.name} - {item.age}
          </h3>
        ))
      }
    </>
  )
}

export default UpdatingArrayinState