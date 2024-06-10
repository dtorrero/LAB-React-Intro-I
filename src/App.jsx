import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const username = "Alma";
  const students =["Flavio", "Luis", "David", "Zindy", "Ale" ];
  //const students = [];

const studentsObj = [
  {name: 'Eustaquio', grade: 7 },
  {name: 'Alfredo', grade: 8},
  {name: 'Lucas', grade: 4.5},
  {name: 'Felipe', grade: 6}
]
  
  const listStudents = students.map((student) => <li>{student}</li>)
  const listStudentsOBJ = studentsObj.map((student) => student.grade > 5 ? 
  <tr><td>{student.name}</td><td>{student.grade}</td></tr> : 
  <div style={{color:"red"}}><tr><td>{student.name}</td><td>{student.grade}</td></tr></div> ) 
  
  

  return (
    <>
     
     <h1>Welcome {username}</h1>

     <h2>Students List</h2>

      <h1>{students.length > 0 ? <ul>{listStudents}</ul> : <p>No students</p>} </h1>
      <h3>Total Students : {students.length}</h3>

      <table>
        <center><tr><th>Name</th><th>Grade</th></tr></center>
        
        <tr>{studentsObj.length > 0 ? listStudentsOBJ : <p>No students</p>}</tr>
      
      </table>
     
   

    </>
  )
}

export default App



