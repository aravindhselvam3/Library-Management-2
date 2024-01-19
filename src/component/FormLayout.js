import React from 'react'
function FormLayout(props) {
    const isVisivle="hidden"
    return (
        <>
            <div className="container">
                <form onSubmit={(e) => props.updateData(e)}>
                    <div className="form-group">

                        {/* form header */}
                        <div className="form-header">
                            <h1>{props.title}</h1>
                        </div>

                        {/* form body starts */}
                        <div className="form-body">
                            {/* row name */}
                            
                            <div className="form-group row">
                                <label for="firstname" className="label-title col-sm-2">Name:</label>
                                <input type="text" id="firstname" className="form-input col-md-6" placeholder="enter student name" required="required" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
                            </div>
                            
                            {/* row gender */}
                            <div className="form-group row">
                                <label className="label-title col-sm-2">Gender:</label>
                                <div className="input-group col-sm-10">
                                    <label for="male"><input type="radio" name="gender" value="male" id="male" onChange={(e) => props.setGender(e.target.value)} /> Male</label>
                                    <label for="female"><input type="radio" name="gender" value="female" id="female" onChange={(e) => props.setGender(e.target.value)} /> Female</label>
                                </div>
                            </div>
                            
                            {/* row birthdate */}
                            <div className="form-group row">
                                <label for="birthdate" className="label-title col-sm-2">Birthdate:</label>
                                <input type="date" name="birthdate" required value={props.birthdate} onChange={(e) => props.setBirthdate(e.target.value)} />
                                {/* "2014-02-09" */}
                                {/* <label for="class" className="label-title col-sm-2">Class</label>
                                <input type="number" name="class" value="18" className="form-input" /> */}
                            </div>
                            {/* row address */}
                            <div className="form-group row">
                                <label for="inputAddress" className="label-title col-sm-2">Address:</label>
                                {/* <div className="row"> */}
                                <input type="text" className="form-input col-md-2 mb-3" id="inputStreet" placeholder="street" value={props.street} onChange={(e) => props.setStreet(e.target.value)}/>
                                <input type="text" className="form-input col-md-2 mb-3" id="inputAddress" placeholder="city" value={props.city} onChange={(e) => props.setCity(e.target.value)}/>
                                <input type="text" className="form-input col-md-3" id="inputAddress" placeholder="state" value={props.state} onChange={(e) => props.setState(e.target.value)} />
                                <input type="text" className="form-input col-md-2" id="inputAddress" placeholder="country code" value={props.zip} onChange={(e) => props.setZip(e.target.value)} />
                                {/* <input type="text" className="form-input col-md-6" id="inputAddress" placeholder="" /> */}
                                {/* </div> */}
                            </div>

                            {/* row email */}
                            <div className="form-group row">
                                <label for="firstname" className="label-title col-sm-2">Email Id:</label>
                                <input type="text" name="email" className="form-input col-md-6" placeholder="enter student email" required="required" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                            </div>
                            {/* row contact */}
                            <div className="form-group row">
                                <label for="class" className="label-title col-sm-2">Contact:</label>
                                <input type="contact" name="contact" className="form-input col-md-6" placeholder="enter student phone" value={props.phone} onChange={(e) => props.setPhone(e.target.value)}/>
                            </div>
                             {/* row document */}
                             <div style={props.mystyle}>
                             <div className="form-group row">
                             <label htmlFor="bookSelect" className="label-title col-sm-2">Select a Book</label>
                            <select id="bookSelect" name="bookSelect" className="form-input col-md-6"  onChange={(e) => props.setBook(e.target.value)} value={props.book}>
                                    <option value="">Select a book</option>
                                    <option value="To Kill a Mockingbird">To Kill a Mockingbird</option>
                                    <option value="1984">1984</option>
                                    <option value="The Great Gatsby">The Great Gatsby</option>
                                    <option value="Pride and Prejudice">Pride and Prejudice</option>
                                    <option value="The Catcher in the Rye">The Catcher in the Rye</option>   
                             </select>         
                            </div>
                            </div>


                            <div className="form-group row">

                            </div>


                        </div>

                        {/* form body ends */}
                        <div className="form-footer">
                            <span>* required</span>
                            <button type="submit" className="btn">{props.action}</button>
                        </div>
                    </div>
                </form>
            </div>


        </>
    );
}
export default FormLayout;