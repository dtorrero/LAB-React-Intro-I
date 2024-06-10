import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const username = "Alma";
  const students =["Flavio", "Luis", "David", "Zindy", "Ale" ];
  //const students = [];

const studentsObj = [
  {name: 'Flavio', grade: 7 },
  {name: 'Luis', grade: 8},
  {name: 'David', grade: 4.5},
  {name: 'Zindy', grade: 6}
]
  //<p {studentsObj.grade > 5 ? style = 'color:red;' : style = 'color:green;'}>
  const listStudents = students.map((student) => <li>{student}</li>)
  const listStudentsOBJ = studentsObj.map((student) => student.grade > 5 ? 
  <tr><td>{student.name}</td><td>{student.grade}</td></tr> : 
  <div style={{color:"red"}}><tr><td>{student.name}</td><td>{student.grade}</td></tr></div> ) 
  
  

  return (
    <>
      
     <h1>Welcome {username}</h1>

     <h2>Students List</h2>

      <h1>{students.length > 0 ? <ul>{listStudents}</ul> : <p>No students</p>} </h1>
      <h1>Total Students : {students.length}</h1>

      <table>
        <center><tr><th>Name</th><th>Grade</th></tr></center>
        
        <tr>{studentsObj.length > 0 ? listStudentsOBJ : <p>No students</p>}</tr>
      
      </table>
   

    </>
  )
}

export default App



