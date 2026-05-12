import React from 'react';
import { Form, Image } from 'react-bootstrap';


const UploadForm = () => {  

  return (
    <>
      <Form>
        <Form.Group className="">    
        <div className="profilepic" id='profilepic'>
          <Image src="assets/images/profile.svg" alt="icon" width={20} height={20}/>
          <Form.Control type="file" id='profileimg'/>
        </div>  
        </Form.Group>
      </Form>
    </>
  );

};

export default UploadForm;
