'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image, Table, ProgressBar, Accordion, Button, Form, InputGroup } from 'react-bootstrap';
import Homeheader from './components/Homeheader';
import Homefooter from './components/Homefooter';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 194250;

const timerProps = {
  isPlaying: true,
  size: 140,
  strokeWidth: 9
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="datetxt">{dimension}</div>
      <div className="time timesze">{time}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 767, min: 550 },
      items: 2
    },
    smmobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };

  const [key, setKey] = useState('hotSpot');
  useEffect(() => {
    document.body.classList.remove('loginbanner', 'apipage', 'tradepagebg');
    AOS.init();
  })

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="homepagebg">
      <Homeheader />
      <section className="homebannerbg">

        <Container className='sitebannercontent' data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h2 className="heading-title pt-0 pb-3"><span className='text-yellow titletxt'>AffiliateX</span> - Powering the <br />
                Future of Affiliate Marketing
              </h2>
              <p>Maximize your earnings, grow your network, and track real-time performance with our smart affiliate solutions.</p>
              <Button className="btn sitebtn">Get Started</Button>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="abouticon text-center">
              <Image src="assets/images/about.png" width={100} height={100} alt="icon" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="partnerlogobg">
        <Container>
          <h2 className="heading-title text-center pb-4">Millions of <span className='text-yellow'>customers grow</span> their business every day with us</h2>
          <div className="partnerbox">
            <Carousel responsive={responsive} arrows={false} className="partnerlogoscroll d-flex">
              <div>
                <Image src="assets/images/partner1.png" width={100} height={100} alt="logo" />
              </div>
              <div>
                <Image src="assets/images/partner2.png" width={100} height={100} alt="logo" />
              </div>
              <div>
                <Image src="assets/images/partner3.png" width={100} height={100} alt="logo" />
              </div>
              <div>
                <Image src="assets/images/partner4.png" width={100} height={100} alt="logo" />
              </div>
            </Carousel>
          </div>
        </Container>
      </section>

      <section className="howitworkbg" id="howitworks">
        <Image src='assets/images/businessbgright.svg' className='boostbgimg boostbgimgright'/>
        <Image src='assets/images/businessbgleft.svg' className='boostbgimg boostbgimgleft'/>
        <Container data-aos="fade-up" data-aos-duration="1000">
          <h2 className="heading-title text-center pb-4">Boost <span className='text-yellow'>Your Business</span> and Share Content with Us</h2>
          <div className="flexbox text-center align-item-center businessbg">
            <div className="howitbox box">
              <div className="hiconb">
                <Image src="assets/images/hicon2.svg" width={100} height={100} alt="hicon" className="hwicon" />
              </div>
              <div>
                <h4 className="sub-heading">Advertisers</h4>
                <p className="content">Get more sales & conversions.</p>
                <div className='mt-3'>
                  <Link href='#'>Read More <span><Image src='assets/images/arrowright.svg' className='arrowicon ms-1' /></span></Link>
                </div>
              </div>
            </div>
            <div className="howitbox box">
              <div className="hiconb">
                <Image src="assets/images/hicon3.svg" width={100} height={100} alt="hicon" className="hwicon" />
              </div>
              <div>
                <h4 className="sub-heading">Agencies</h4>
                <p className="content">Manage multiple brands & campaigns.</p>
                <div className='mt-3'>
                  <Link href='#'>Read More <span><Image src='assets/images/arrowright.svg' className='arrowicon ms-1' /></span></Link>
                </div>
              </div>
            </div>
            <div className="howitbox box">
              <div className="hiconb">
                <Image src="assets/images/hicon4.svg" width={100} height={100} alt="hicon" className="hwicon" />
              </div>
              <div>
                <h4 className="sub-heading">Publishers</h4>
                <p className="content">Monetize your traffic with top offers.</p>
                <div className='mt-3'>
                  <Link href='#'>Read More <span><Image src='assets/images/arrowright.svg' className='arrowicon ms-1' /></span></Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="partnerlogobg affresultssec aboutusbg">
        <Container>
          <h2 className="heading-title text-center pb-4">AffiliateX <span className='text-yellow'>Results</span> in Numbers</h2>
          <div className='resultsflex'>
              <div>
                  <h4>10,000 +</h4>
                  <p>Active Affiliates</p>
              </div>
              <div>
                  <h4>$50M +</h4>
                  <p>Paid In Commissions</p>
              </div>
              <div>
                  <h4>150 +</h4>
                  <p>Countries Connected</p>
              </div>
              <div>
                  <h4>95%</h4>
                  <p>Advertiser Satisfaction Rate</p>
              </div>
              <div>
                  <h4>24/7</h4>
                  <p>Support & Assistance</p>
              </div>
          </div>
        </Container>
      </section>

      <section className="aboutusbg featuresec" id="features">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="abouticon text-center">
              <Image src="assets/images/feedbackimg.png" width={100} height={100} className='powfeatomg' alt="icon" />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h5 className='subtitle'>🤩 Exclusive Features</h5>
              <h2 className="heading-title pb-3">Powerfull <span className='text-yellow'>Features</span> to Maximize Your Earnings</h2>
              <p>Unlock the full potential of affiliate marketing with AffiliateX’s cutting-edge tools. Whether you're an advertiser, agency, or publisher, our platform provides seamless tracking, high payouts, and real-time insights to help you grow and scale effortlessly.</p>
              <div className='d-flex'>
                <div className="mt-3">
                  <Image src='assets/images/feat1.svg' className='featimg'/>
                  <h4>High-Paying Affiliate Offers</h4>
                  <p>Promote top brands and earn maximum commissions with exclusive, high-converting offers.</p>
                </div>
                <div className="mt-3">
                <Image src='assets/images/feat2.svg' className='featimg'/>
                  <h4>Real-Time Tracking & Instant Payouts</h4>
                  <p>Monitor your earnings live and withdraw funds quickly via bank, PayPal, or crypto.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="aboutusbg subscribebg" id="aboutus">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h2 className="heading-title pb-3"><span className='text-yellow'>Stay Updated</span> & Earn More!</h2>
              <p>Subscribe now to get the latest updates, exclusive offers, and affiliate marketing insights delivered straight to your inbox!</p>
              <Form.Group className="form-group">
                <InputGroup>
                  <Form.Control id="subscribe" type="email" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1" />
                  <InputGroup.Text id="subscribebtn" className="">
                    <Button className="sitebtn btn-sm">Subscribe Now</Button>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="abouticon text-center">
              <Image src="assets/images/updateimg.png" width={100} height={100} alt="icon" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="partnerlogobg" id='affiliate'>
        <Container data-aos="fade-up" data-aos-duration="1000">
          <h2 className="heading-title text-center pb-4"><span className='text-yellow'>How</span> AffiliateX Works?</h2>
          <div>
            <Image src='assets/images/affiliate.png' className='affiliateimg' />
          </div>
        </Container>
      </section>

      <section className="aboutusbg dloadsec" id="aboutus">
        <Container data-aos="fade-up" data-aos-duration="1000">
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="abouticon dloadimgdiv text-center">
              <Image src="assets/images/dloadmob.png" width={100} height={100} alt="icon" />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <h2 className="heading-title pb-3">Download Our App for Easy <span className='text-yellow'>Access Anywhere</span></h2>
              <p>Download our app for seamless access to all features, anytime and anywhere. Stay connected and manage everything right from your phone.</p>
              <div className="appimg d-flex gap-3 mt-3">
                <a href="#">
                  <Image src="assets/images/playstore.svg" alt="icon" />
                </a>
                <a href="#">
                  <Image src="assets/images/appstore.svg" alt="icon" />
                </a>
              </div>
              <div className="table-content mt-3">
                <div className="qrbg">
                  <Image
                    src="assets/images/downqr.png"
                    alt="icon"
                    className="qrimg"
                  />
                </div>
                <div>
                  <p className="mb-0">Scan this QR code to</p>
                  <h4 className="h4">Download our app</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Homefooter />
    </div>
  );
}