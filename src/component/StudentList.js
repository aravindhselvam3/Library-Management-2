import React from "react"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const StudentList = (student) => {
  const students = useSelector((state) => state.student.students);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">Student List</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <Link to="/add-student">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add new student</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Book Name</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            
            
            {students.map((student,i)=>{return(
              <>
              <tr>
               <th scope="row">{i + 1}</th>
              <td key={{i}}>{student.name}</td>
              <td key={{i}}>{student.gender}</td>
              <td key={{i}}>{student.birthdate}</td>
              <td key={{i}}>{student.street},{student.city},{student.state},{student.country},{student.zip}</td>
              <td key={{i}}>{student.email}</td>
              <td key={{i}}>{student.phone}</td>
              <td key={{i}}>{student.book}</td>
              <td ><Link to={`/edit-student/${student.name}`}><button onClick={student} className="btn btn-dark">Edit</button></Link></td>
              </tr>
              </>
              )})}
            
          
          </tbody>
        </table>
      </div>

      {/* <div className="table-responsive">
  <table className="table">
    ...
  </table>
</div> */}
    </>
  )


}

export default StudentList;
