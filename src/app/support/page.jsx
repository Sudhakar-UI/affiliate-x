"use client"
import React, { useState } from "react"
import { Container, Form, Button, Table, Image, Modal, Badge } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';


const Page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const [imageName, setImageName] = useState('');
    const [imageSrc, setImageSrc] = useState('assets/images/proof.svg');

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleFileChange = (event) => {
        setImageName(event.target.files[0].name);
        readURL(event.target);
    };
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <Userheader />
            <Leftsidemenu />

            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2 text-start">Support</h2>
                    <div className="tabrightbox">
                        <Button className="btn sitebtn orangebtn" id="createticket" onClick={handleShowModal1}>Create Ticket</Button>
                    </div>

                </Container>
            </div>
            <article className="gridparentbox supportbg">
                <Container className="sitecontainer">
                    <div className='panelcontentbox mobilepaneltablebox'>
                        <SimpleBar className="table-responsive sitescroll">
                            <Table className="sitetable table-responsive-stack" id="table1">
                                <thead>
                                    <tr>
                                        <th>Ticket ID</th>
                                        <th>Subject</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to verify KYC</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2024, 13:17:33 </td>
                                        <td><Link id="chat" className="btn sitebtn btn-sm" href="/chat">Chat</Link></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to verify KYC</td>
                                        <td><Badge bg="info">Open</Badge></td>
                                        <td>28/12/2024, 13:17:33 </td>
                                        <td><Link id="chat" className="btn sitebtn btn-sm" href="/chat">Chat</Link></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to verify KYC</td>
                                        <td><Badge bg="warning">Pending</Badge></td>
                                        <td>28/12/2024, 13:17:33 </td>
                                        <td><Link id="chat" className="btn sitebtn btn-sm" href="/chat">Chat</Link></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to verify KYC</td>
                                        <td><Badge bg="info">Open</Badge></td>
                                        <td>28/12/2024, 13:17:33 </td>
                                        <td><Link id="chat" className="btn sitebtn btn-sm" href="/chat">Chat</Link></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to verify KYC</td>
                                        <td><Badge bg="warning">Pending</Badge></td>
                                        <td>28/12/2024, 13:17:33 </td>
                                        <td><Link id="chat" className="btn sitebtn btn-sm" href="/chat">Chat</Link></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to verify KYC</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2024, 13:17:33 </td>
                                        <td><Link id="chat" className="btn sitebtn btn-sm" href="/chat">Chat</Link></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to verify KYC</td>
                                        <td><Badge bg="info">Open</Badge></td>
                                        <td>28/12/2024, 13:17:33 </td>
                                        <td><Link id="chat" className="btn sitebtn btn-sm" href="/chat">Chat</Link></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                </Container >
            </article >
            <Userfooter />
            <Modal className="modaltable modalbgt" show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form className='siteformbg'>
                            <Form.Group className="form-group">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" id="title" />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label>Enter your message</Form.Label>
                                <Form.Control as="textarea" rows={5} name="Message" id="message" />
                            </Form.Group>
                            <Form.Group className="form-group kycupload">
                                <label>Upload Document <span className="t-red">*</span></label>
                                <div className="kycproffbox">
                                    <div>
                                        <Image id="doc1" src={imageSrc} width={20} height={20} alt="front" />
                                    </div>
                                    <div className="uploadprofileiconbox text-end">
                                        <label className="custom-file-upload customupload" id="file-upload1">Upload here..</label>
                                        <input id="file_upload" onChange={handleFileChange} name="profile" type="file" />
                                    </div>
                                </div>
                            </Form.Group>
                            <div className="text-center">
                                <Button className='sitebtn' id="submit">Submit</Button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default Page;