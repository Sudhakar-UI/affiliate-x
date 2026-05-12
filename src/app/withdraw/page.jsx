
"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, Accordion, Modal } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';

const page = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => {
    setShowModal1(false);
    setShowModal2(true);
  };
  const handleCloseModal2 = () => setShowModal2(false);

  const handleCancelModal2 = () => {
    showModal1(false);
  };

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent">
        <Container className="sitecontainer">
          <h2 className="h2 text-start">Withdraw</h2>
        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="sitecontainer walletpagebg depositbg">
          <div className="">
            <div className="mt-0 panelcontentbox">
              <div className="innerpagetab historytab mb-4 wallettab">
                <Nav variant="pills" className="tabbanner">
                  <Nav.Item><Nav.Link href="/withdraw" className="active" id='cryptotab'>Crypto</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/fiatwithdraw" id='fiattab'>Fiat</Nav.Link></Nav.Item>
                </Nav>
              </div>
              <div className='walletdiv'>
                <Form className="siteformbg">
                  <Row>
                    <Col xl={6} lg={6} md={12}>
                      <Form.Group className="form-group">
                        <Form.Label>Select Crypto/Currency </Form.Label>
                        <Form.Select className="form-control" id='currency'>
                          <option>BTC</option>
                          <option>ETH</option>
                          <option>SOL</option>
                          <option>TRX</option>
                          <option>LTC</option>
                          <option>AVAX</option>
                          <option>DOGE</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="form-group">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Select className="form-control" id='paymethod'>
                          <option></option>
                          <option>BTC</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="form-group">
                        <Form.Label>Select Network</Form.Label>
                        <Form.Select className="form-control" id='network'>
                          <option></option>
                          <option>BTC</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label>Wallet Addres</Form.Label>
                        <InputGroup>
                          <Form.Control placeholder="SDAFYTEUWYR645854" id='walletaddress' />
                          <InputGroup.Text id="copy" className="cpybtn">Copy</InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label>Withdraw Amount</Form.Label>
                        <Form.Control id='withdrawamt' />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <div className="stoplimtboxt">
                          <div className="link-div">
                            <div className="activelimit" id='25'>25%</div>
                            <div id='50'>50%</div>
                            <div id='75'>75%</div>
                            <div id='100'>100%</div>
                          </div>
                        </div>
                      </Form.Group>
                    </Col>
                    <Col xl={6} lg={6} md={12}>
                      <div className="notestitle banknotesinfo notesgray mt-3">
                        <p className="pb-0"><span className="t-gray">Min Withdraw</span><span className="t-black">0.00060000
                          BTC</span></p>
                        <p className="pb-0"><span className="t-gray">Max Withdraw</span><span className="t-black">0.00060000
                          BTC</span></p>
                        <p className="pb-0"><span className="t-gray">Total Withdraw</span><span className="t-black">0.00060000
                          BTC</span></p>
                        <p className="pb-0"><span className="t-gray">Withdraw Fee</span><span className="t-black">0.00060000
                          BTC</span></p>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={12}>
                      <Form.Group className="form-group mt-2">
                        <Button type="button" className="sitebtn btn-block" id="submitbtn" onClick={handleShowModal1}>Submit</Button>
                      </Form.Group>
                    </Col>
                  </Row>

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
                      <th>Coin</th>
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
                      <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/sol.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />SOL</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/trx.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />TRX</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
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

      <Modal className="modalbgt" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h4>Withdrawal confirmation</h4>
            <p>Are you sure you want to confirm this withdrawal?</p>
          </div>
          <hr />
          <Form className='siteformbg'>
            <div className="text-center">
              <Button className='sitebtn me-2' id="submit" onClick={handleShowModal2}>Confirm</Button>
              <Button className='borderbtn' type="button " id="cancelbtn" onClick={handleCancelModal2}>Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal className="modalbgt" show={showModal2} onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h4>Email Verification</h4>
          </div>
          <Form className='siteformbg'>
            <Form.Group className="form-group">
              <Form.Label>Enter your Code</Form.Label>
              <Form.Control type="text" id="emailverify" />
              <p>Mail not received click resend link, <Link href="/" className="alink">Send Code</Link></p>
            </Form.Group>
            <Form.Group className="form-group text-center">
              <Button className="btn sitebtn w-100" id="submitbtn">Submit</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>


    </div>
  );
}

export default page