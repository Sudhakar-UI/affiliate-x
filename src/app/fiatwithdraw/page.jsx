"use client"
import React from "react";
import Leftsidemenu from "../components/Leftsidemenu";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import { Container, Image, Table, Form, Button, Row, Col, Nav, Badge, Accordion } from 'react-bootstrap';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import ResponsiveTable from '../components/ResponsiveTable';

const page = () => {
  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent">
        <Container className="sitecontainer">
          <h2 className="h2 text-start">Withdraw</h2>
        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="container sitecontainer depositbg">
          <div className="">
            <div className="mt-0 panelcontentbox">
              <div className="innerpagetab historytab mb-4 wallettab">
                <Nav variant="pills" className="tabbanner">
                  <Nav.Item><Nav.Link href="/withdraw" id='cryptotab'>Crypto</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/fiatwithdraw" className="active" id='fiattab'>Fiat</Nav.Link></Nav.Item>
                </Nav>
              </div>
              <div className="">
                <Form className="siteformbg">

                  {/* bank method */}

                  {/* <Row>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Select className="form-control" id="paymethod">
                          <option>Bank</option>
                          <option>PayPal</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Receive withdrawal amount in currency</Form.Label>
                        <Form.Select className="form-control" id="currency">
                          <option>USD</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Country</Form.Label>
                        <Form.Select className="form-control" id="country">
                          <option>Select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control placeholder="Enter Bank Name" id="bankname" />
                      </Form.Group>
                    </Col>

                  </Row>

                  <Row>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Bank Code</Form.Label>
                        <Form.Select className="form-control" placeholder="Enter Bank Code" id="bankcode">
                          <option>Enter Bank Code</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control placeholder="Enter Account Name" id="accname" />
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control placeholder="Enter Account Number" id="accnum" />
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Form.Control placeholder="Enter Withdraw Amount" id="withdrawamt" />
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={6}>
                      <Form.Group className="form-group">
                        <div className="stoplimtboxt">
                          <div className="row link-div ms-0 me-0">
                            <div className="col activelimit">25%</div>
                            <div className="col">50%</div>
                            <div className="col">75%</div>
                            <div className="col">100%</div>
                          </div>
                        </div>
                      </Form.Group>

                      <div className="notestitle notesgray">

                        <p className="pb-1"><span className="t-gray">Withdraw Fee</span>
                          <br /><span className="t-black">0.00060000
                            BTC</span></p>
                        <p className="pb-1"><span className="t-gray">Total Withdraw Amount</span>
                          <br /><span className="t-black">0.00060000
                            BTC</span></p>
                      </div>




                      <div className="form-group text-center">
                        <Button className="btn sitebtn btn-block" id="submitbtn">Submit</Button>
                      </div>
                    </Col>

                  </Row> */}

                  {/* bank method ends*/}

                  {/* paypal method */}

                  {/* <Row>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Select className="form-control" id="paymethod">
                          <option>Bank</option>
                          <option>PayPal</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Receive withdrawal amount in currency</Form.Label>
                        <Form.Select className="form-control" id="currency">
                          <option>USD</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Country</Form.Label>
                        <Form.Select className="form-control" id="country">
                          <option>Select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control placeholder="" id="credcardnum" />
                      </Form.Group>
                    </Col>

                  </Row>

                  <Row>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Payment Type</Form.Label>
                        <Form.Select className="form-control" id="paytype">
                          <option>Bank</option>
                          <option>PayPal</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Row>
                          <Form.Label>Expiration Date</Form.Label>
                          <Col>
                            <Form.Control placeholder="mm" id="expmonth" />
                          </Col>
                          <Col>
                            <Form.Control placeholder="yyyy" id="expyear" />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>CSS</Form.Label>
                        <Form.Control placeholder="" id="css" />
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Form.Control placeholder="Enter Withdraw Amount" id="withdrawamt" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-group">
                        <div className="stoplimtboxt">
                          <div className="row link-div ms-0 me-0">
                            <div className="col activelimit">25%</div>
                            <div className="col">50%</div>
                            <div className="col">75%</div>
                            <div className="col">100%</div>
                          </div>
                        </div>
                      </Form.Group>

                      <div className="notestitle notesgray">
                        <p className="pb-1"><span className="t-gray">Withdraw Fee</span>
                          <br /><span className="t-black">0.00060000
                            BTC</span></p>
                        <p className="pb-1"><span className="t-gray">Total Withdraw Amount</span>
                          <br /><span className="t-black">0.00060000
                            BTC</span></p>
                      </div>




                      <div className="form-group text-center">
                        <Button className="btn sitebtn btn-block" id="submitbtn">Submit</Button>
                      </div>
                    </Col>

                  </Row> */}

                  {/* paypal method ends*/}

                  {/* mobile payment method */}

                  <Row>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Select className="form-control" id="paymethod">
                          <option>Bank</option>
                          <option>PayPal</option>
                          <option>Mobile</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Receive withdrawal amount in currency</Form.Label>
                        <Form.Select className="form-control" id="currency">
                          <option>USD</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Country</Form.Label>
                        <Form.Select className="form-control" id="country">
                          <option>Select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Enter Mobile Number</Form.Label>
                        <Form.Control placeholder="" id="credcardnum" />
                      </Form.Group>
                    </Col>

                  </Row>

                  <Row>
                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Service Provide</Form.Label>
                        <Form.Select className="form-control" id="service">
                          <option>USD</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="">Account Type</Form.Label>
                        <Form.Select className="form-control" id="acctype">
                          <option>USD</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col lg={3} md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Form.Control placeholder="Enter Withdraw Amount" id="withdrawamt" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-group">
                        <div className="stoplimtboxt">
                          <div className="row link-div ms-0 me-0">
                            <div className="col activelimit">25%</div>
                            <div className="col">50%</div>
                            <div className="col">75%</div>
                            <div className="col">100%</div>
                          </div>
                        </div>
                      </Form.Group>

                      <div className="notestitle notesgray">
                        {/* <p className="pb-1"><span className="t-gray">Min Withdraw</span>
                        <br /><span className="t-black">0.00060000
                          BTC</span></p>
                      <p className="pb-1"><span className="t-gray">Max Withdraw</span>
                        <br /><span className="t-black">0.00060000
                          BTC</span></p> */}
                        <p className="pb-1"><span className="t-gray">Withdraw Fee</span>
                          <br /><span className="t-black">0.00060000
                            BTC</span></p>
                        <p className="pb-1"><span className="t-gray">Total Withdraw Amount</span>
                          <br /><span className="t-black">0.00060000
                            BTC</span></p>
                      </div>




                      <div className="form-group text-center">
                        <Button className="btn sitebtn btn-block" id="submitbtn">Submit</Button>
                      </div>
                    </Col>

                  </Row>

                  {/* mobile payment method ends*/}


                </Form>
              </div>
            </div>
          </div>
          <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent Withdraw History</h2>
            <div className="panelcontentbox">
              <Simplebar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id='table1'>
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Currency</th>
                      <th>Withdraw Address</th>
                      <th>Requested Amount</th>
                      <th>Withdraw Fee</th>
                      <th>Total Withdraw</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </Simplebar>
              <ResponsiveTable tableId="table1" />
            </div>
          </div>


        </Container>
      </article>
      <Userfooter />
    </div>
  )
}

export default page