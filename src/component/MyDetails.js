import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../component/css/form.css'
import FormLayout from './FormLayout'
import Moment from 'moment';
import { getstudent}from "../actions/studentAction";

function MyDetails() {
    
    let { id } = useParams();
    const dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const[book,setBook] = useState("")
    const student = useSelector((state) => state.student.student);

    function handleChange(e) {
        setEmail(e)
        console.log("event");
        console.log(e);
    }
    useEffect(() => {

        if (student != null) {
            setName(student.name);
            setGender(student.gender);
            setBirthdate(Moment(student.birthdate).format('YYYY-MM-DD'))
            setStreet(student.street)
            setCity(student.city)
            setState(student.state)
            setZip(student.zip)
            setEmail(student.email);
            setPhone(student.phone);
            setBook(student.book)

        }
        dispatch(getstudent(id));
    }, [student]);
    const updateData = (e) => {
        e.preventDefault();

        const updated_student = Object.assign(student, {
            name: name,
            email: email,
            gender: gender,
            street: street,
            state: state,
            zip: zip,
            phone: phone,
            birthdate: birthdate,
            book:book

        })

        history.push("/students")
    }
return (
    <>
     <div className="card border-0 shadow">
                <FormLayout
                
                    handleChange={handleChange} updateData={updateData}
                    setName={setName} setEmail={setEmail} setPhone={setPhone} setCity={setCity} setGender={setGender}
                    setBirthdate={setBirthdate} setState={setState} setZip={setZip} setStreet={setStreet} setBook={setBook}
                    title="Edit student data" name={name} book={book} email={email} birthdate={birthdate} phone={phone} street={street} state={state} city={city} zip={zip} action="Update"
                />
            </div>
    </>
);

}
export default MyDetails;
