import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Playerform() {
  return (
    <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Playerform











// import React from 'react'

// function Playerform() {
//   return (
//     <>
//      <div className='container'>
//             <div className='form_box'>
//                 <h2>Pleyer Form</h2>
//                 <form>
//                     <div className='input_group'>
//                         <div className='input_field'>
//                         <i class="fa-solid fa-user"></i>
//                         <input type='text' placeholder='First name'></input>

//                        <input type='text' placeholder='Last name'></input><
//                         <input type='text' placeholder='Sports'></input>
//                         <input type='text' placeholder='Skills'></input>
//                         <input type='number' placeholder='Phone number' ></input><input type='text' placeholder='Email'></input>
//                          <input type='text' placeholder='Address'></input>  
//                          <input type='text' placeholder='Address'></input>
//                          <input type='text' placeholder='Chose'>Chose day When</input>

//                         </div>
//                     </div>
//                 </form>

//             </div>

          
//         </div>
        
//     </>
//   )
// }

// export default Playerform