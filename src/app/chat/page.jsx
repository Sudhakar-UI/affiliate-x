"use client"
import React, { useState } from "react"
import { Container, Form, Image } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import Leftsidemenu from '../components/Leftsidemenu';


const page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />   
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">Chat</h2>
                    <div className="tabrightbox"> <Link href="/support" className="btn sitebtn">Back</Link> </div>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer supportbg">
                  
                    <div className="panelcontentbox chatticketlist">
                        <h1 className="heading-box">Ticket ID : EX6276648</h1>
                       
                        <div className="chatbox ticketchat">
                        <div className="ps-3 pe-3">
                            <Form className="siteformbg">
                                    <div className="supportsearch pb-3">
                                        <Form.Group className="form-group">
                                            <Form.Control placeholder="Search here..." id="chatsearch" />
                                        </Form.Group>
                                    </div>
                            </Form>
                        </div>
                            <SimpleBar className="chat chatboxscroll">
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg"/>
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024)</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:05 AM</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon"id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                </li>
                            </SimpleBar>
                            <div className="chat-foot">
                                <Form className="siteformbg">
                                    <div className="form-group">
                                        <Form.Label>Enter your message</Form.Label>
                                        <textarea className="form-control" rows={4} id="support_textbox"></textarea>
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="submit" className="btn sitebtn" value="Submit" id="sendbtn" />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Container >
            </article >
            <Userfooter />
        </div>
    )
}

export default page