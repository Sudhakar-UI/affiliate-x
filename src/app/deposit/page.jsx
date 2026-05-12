"use client"
import React from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { Container, Form, Image, Table, InputGroup, Button, Row, Col, Badge, Accordion, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';

const page = () => {
  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent">
        <Container className="sitecontainer">
          <h2 className="h2 text-start">Deposit</h2>
        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="sitecontainer walletpagebg depositbg">
          <div className="">
            <div className="mt-0 panelcontentbox">
              <div className="innerpagetab historytab mb-4 wallettab">
                <Nav variant="pills" className="tabbanner">
                  <Nav.Item><Nav.Link href="/deposit" className="active" id='cryptotab'>Crypto</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/fiatdeposit" id='fiattab'>Fiat</Nav.Link></Nav.Item>
                </Nav>
              </div>
              <div className='walletdiv'>
                <Form className="siteformbg">
                  <Row>
                    <Col lg={6} md={6}>
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
                        <Form.Label>Select Payment Method</Form.Label>
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

                      {/* <Form.Group className="form-group">
                      <Form.Label>Deposit Amount</Form.Label>
                      <Form.Control id='dpstamount' />
                    </Form.Group> */}
                      <Form.Group className="form-group">
                        <Form.Label>Wallet Addres</Form.Label>
                        <InputGroup>
                          <Form.Control placeholder="SDAFYTEUWYR645854" id='walletaddres' />
                          <InputGroup.Text id="adcopy" className="cpybtn">Copy</InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6}>
                    <Form.Group className="form-group mb-0">
                        <div className="d-flex align-items-center qrcode">
                          <Image src="assets/images/qrcode.png" width={50} height={50} alt="coin" id='qrcode' />
                          <p>
                            <Button className="btn sitebtn btn-sm ms-2 mt-2" id='download_address'>Download</Button>
                          </p>
                        </div>
                      </Form.Group>
                      <div className="notestitle notesgray dpstnotes">
                        <p className="pb-0">
                          <span className="t-gray">Deposit Fee</span> <br />
                          <span className="t-black">0.00050000 BTC</span>
                        </p>
                        <p className="pb-0">
                          <span className="t-gray">Minimum Deposit Limit</span>
                          <br />
                          <span className="t-black">0.00060000 BTC</span>
                        </p>
                        <p className="pb-0">
                          <span className="t-gray">Maximum Deposit Limit</span>
                          <br />
                          <span className="t-black">0.00060000 BTC</span>
                        </p>
                      </div>
                      {/* <p className="text-danger">
                      Note : Deposit may take from a few minutes to over 30
                      minutes.
                    </p> */}
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
          <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent Deposit History</h2>
            <div className="panelcontentbox">
              <Simplebar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id='table1'>
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Coin</th>
                      <th>TX Hash</th>
                      <th>Sender</th>
                      <th>Receiver</th>
                      <th>Deposit</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr className="nodata">
                      <td colSpan={8} className='text-center'>
                        <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                        No record found
                      </td>
                    </tr> */}
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/trx.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />TRX</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                      <td>FDATRWYTUNDJF8455674</td>
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
  );
}

export default page
