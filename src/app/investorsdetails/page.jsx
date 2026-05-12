"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Tab, Nav, Table, ProgressBar, Image, Modal, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import Distributionchart from "../components/Distributionchart";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Investorsdetails = () => {
    useEffect(() => {
        document.body.classList.add('innerpagebg');
        return () => {
            document.body.classList.remove('innerpagebg');
            document.body.classList.remove('loginbanner');

        };
    }, []);

    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const [showModal2, setShowModal2] = useState(false);
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    return (
        <>
            <div className="innerpage">
                <Homeheader />
                <div className="innercontentpage investorbanner">
                    <Container>
                        <div className="text-center">
                            <h2 className="h2 pb-2">Invest in Property, Art, and More Backed by Blockchain.</h2>
                            <p>Choose the projects you believe in and invest directly—then connect with founders, share ideas, and become an ambassador to help your investment grow. </p>
                        </div>
                    </Container>
                </div>

                <section className="projectbg">
                    <Container>
                        <div className="projectinfopage">
                            <div className="d-flex">
                                <div>
                                    <div className="investiconpro">
                                        <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                        <div className="projectlogobox">
                                            <Image src="assets/images/projectlogo1.png" width={20} height={20} alt="IEO Banner" className="ieo-logo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="prtcnt">
                                    <h3 className="heading-title mb-1">FarmFresh IT</h3>
                                    <p className="mb-2"><i><small className="t-blue">14 days ago</small></i></p>
                                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eleifend erat. Vivamus eu ante justo. Morbi blandit sem vel ex maximus, at placerat purus tempus. Suspendisse tincidunt ultricies magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eleifend erat. Vivamus eu ante justo. Morbi blandit sem vel ex maximus, at placerat purus tempus.</p>
                                    <ul className="prtlistbadge">
                                        <li>
                                            <span>Invetsment Goal</span><br />
                                            <span>200K</span>
                                        </li>
                                        <li>
                                            <span>Funded</span><br />
                                            <span>60%</span>
                                        </li>
                                        <li>
                                            <span>Investor</span><br />
                                            <span>105</span>
                                        </li>
                                        <li>
                                            <span>Tokens Amount</span><br />
                                            <span>250</span>
                                        </li>
                                        <li>
                                            <span>Min Buy Amount</span><br />
                                            <span>2,256</span>
                                        </li>
                                        <li>
                                            <span>My Tokens</span><br />
                                            <span>5</span>
                                        </li>
                                        <ul className="prtlistbadge mt-2">
                                            <li>
                                                <span>Invetsment Goal</span><br />
                                                <span>200K</span>
                                            </li>
                                            <li>
                                                <span>Funded</span><br />
                                                <span>60%</span>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>


                            <div className="prtcnt mt-4">
                                <Row>
                                    <Col lg={7}>
                                        <h5 className="h5 pb-2">Available Currencies</h5>
                                        <ul className="currencylistb mb-3">
                                            <li><Image src="assets/images/color/usdc.svg" className="coinlisticon" withd={15} height={15} alt="icon" />USD</li>
                                            <li><Image src="assets/images/color/eur.svg" className="coinlisticon" withd={15} height={15} alt="icon" />EUR</li>
                                            <li><Image src="assets/images/color/gbp.svg" className="coinlisticon" withd={15} height={15} alt="icon" />GBP</li>
                                            <li><Image src="assets/images/color/aud.svg" className="coinlisticon" withd={15} height={15} alt="icon" />AUD</li>
                                            <li><Image src="assets/images/color/hkd.svg" className="coinlisticon" withd={15} height={15} alt="icon" />HKD</li>
                                            <li><Image src="assets/images/color/cad.svg" className="coinlisticon" withd={15} height={15} alt="icon" />CAD</li>

                                        </ul>

                                        <h3 className="subhead">About the project</h3>
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eleifend erat. Vivamus eu ante justo. Morbi blandit sem vel ex maximus, at placerat purus tempus. Suspendisse tincidunt ultricies magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eleifend erat. Vivamus eu ante justo. Morbi blandit sem vel ex maximus, at placerat purus tempus.</p>
                                        <Distributionchart />
                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eleifend erat. Vivamus eu ante justo. Morbi blandit sem vel ex maximus, at placerat purus tempus. Suspendisse tincidunt ultricies magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eleifend erat. Vivamus eu ante justo. Morbi blandit sem vel ex maximus, at placerat purus tempus. </p>


                                        <Button type="button" className="sitebtn mt-2" onClick={handleShowModal1} >Buy Token</Button>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="lightgraybg">
                                            <h5 className="subhead">Official Informations</h5>
                                            <Table className="sitetable mb-0" id="table1">
                                                <tbody>
                                                    <tr>
                                                        <td>Website</td>
                                                        <td>https://bnqcorp.com/test</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Location</td>
                                                        <td>India</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date</td>
                                                        <td>18 Apr 2025</td>
                                                    </tr>
                                                    {/* <tr>
                                                <td className="text-start">Social Media :</td>
                                                <td className="socialmlist"><Image src="assets/images/fb.svg" withd={15} height={15} alt="icon" /><Image src="assets/images/x.svg" withd={15} height={15} alt="icon" /><Image src="assets/images/youtube.svg" withd={15} height={15} alt="icon" /></td>
                                            </tr> */}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="lightgraybg mt-3">
                                            <h3 className="subhead">Token Information</h3>
                                            <Table className="sitetable mb-0" id="table2">
                                                <tbody>
                                                    <tr>
                                                        <td>Token Name</td>
                                                        <td>Test</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Token Price</td>
                                                        <td>0.2365</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Token Type</td>
                                                        <td>POS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total token supply</td>
                                                        <td>2,25639</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Rising</td>
                                                        <td>0.3269</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Minimum Purchase</td>
                                                        <td>25</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Container>
                </section>

                <Homefooter />
                <Modal show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt pjmodal'>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Buy Token</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="siteformbg">
                            <Form.Group className="form-group forminputbox">
                                <Form.Label>Select Coin/Currency</Form.Label>
                                <Form.Select className="form-control" id='currency'>
                                    <option>USDT</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group forminputbox mb-2">
                                <Form.Label>Amount</Form.Label>
                                <InputGroup>
                                    <Form.Control name="code" id="buyvolume" />
                                    <div className="input-group-append">
                                        <InputGroup.Text>Token</InputGroup.Text>
                                    </div>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="form-group mb-2">
                                <div className="notestokenb">
                                    <p className="pb-0 mb-0"><span className="t-gray">Token Price in USD</span><span className="t-black">0.00060000</span></p>
                                    <p className="pb-0 mb-0"><span className="t-gray">USDC Amount</span><span className="t-black">0.00060000</span></p>
                                </div>
                            </Form.Group>
                            <div className="text-center">
                                <Button className="sitebtn w-100" id="submit">Buy Token</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>


            </div>
        </>
    )
}

export default Investorsdetails