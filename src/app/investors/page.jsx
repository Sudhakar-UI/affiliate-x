"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Tab, Nav, Table, ProgressBar, Image, Badge, Row, Col, Button } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Investors = () => {
    useEffect(() => {
        document.body.classList.add('innerpagebg');
        return () => {
            document.body.classList.remove('innerpagebg');
            document.body.classList.remove('loginbanner');

        };
    }, []);
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
           <h2 className="heading-title pb-3 text-center">Live Projects</h2> 
                    {/* <div className="lightgrayboxbg nodatabox">
                      <SimpleBar className="table-responsive sitescroll">
                            <Table className="sitetable" id="table1">
                                <tbody>
                                    <tr className="nodata">
                                        <td><Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No Live Projects Found</td>
                                    </tr> 
                                </tbody>
                            </Table>
                        </SimpleBar>
                    </div> */}
                      <Tab.Container defaultActiveKey="all">
                            <div className="boxtabb mb-3">
                            <Nav className="nav nav-tabs tabbanner border-0 justify-content-center" role="tablist">
                                <Nav.Item className="nav-item"><Nav.Link eventKey="all"><Image src="assets/images/icon.svg" width={25} height={25} alt="icon"  className="me-1" />All</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link eventKey="tab1"><Image src="assets/images/icon1.svg" width={25} height={25} alt="icon"  className="me-1" />Real Estate</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link eventKey="tab2"><Image src="assets/images/icon2.svg" width={25} height={25} alt="icon"  className="me-1" />Fine Art</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link eventKey="tab3"><Image src="assets/images/icon3.svg" width={25} height={25} alt="icon"  className="me-1" />Luxury Collectibles</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link eventKey="tab4"><Image src="assets/images/icon4.svg" width={25} height={25} alt="icon"  className="me-1" />Metals</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link eventKey="tab5"><Image src="assets/images/icon5.svg" width={25} height={25} alt="icon"  className="me-1" />Tokenized Legal Contracts</Nav.Link></Nav.Item>
                            </Nav>
                            </div>
                              <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                          {/* <div className="lightgrayboxbg nodatabox">
                                            <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable" id="table1">
                                                        <tbody>
                                                            <tr className="nodata">
                                                                <td><Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No Live Projects Found</td>
                                                            </tr> 
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                            </div>  */}
                                        <div className="investcardbg">
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                    <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                             <tr>
                                                                <td colspan={2}>Investment Goal- $225K</td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                 <div className="investicon">
                                                     <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">Bake It PL</td>
                                                                <td className="text-end"><Badge bg="info">Tech</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>                                                
                                                             <tr>
                                                                <td colspan={2}>Investment Goal- $225K</td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                     <Image src="assets/images/project3.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">AppStar ES</td>
                                                                <td className="text-end"><Badge bg="info">Trades</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                             <tr>
                                                                <td colspan={2}>Investment Goal- $225K</td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                    <Image src="assets/images/project4.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>Investment Goal- $225K</td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                 <div className="investicon">
                                                     <Image src="assets/images/project5.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">Bake It PL</td>
                                                                <td className="text-end"><Badge bg="info">Tech</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                           <tr>
                                                                <td colspan={2}>Investment Goal- $225K</td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                     <Image src="assets/images/project6.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">AppStar ES</td>
                                                                <td className="text-end"><Badge bg="info">Trades</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                          <tr>
                                                                <td colspan={2}>Investment Goal- $225K</td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab1">
                                        <div className="investcardbg">
                                        <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                    <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                           <tr>
                                                                <td>Investment Goal- $225K</td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                    <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}><hr/></td>
                                                            </tr>                                                           
                                                            <tr>
                                                                <td colspan={2}>
                                                                     <div><span className="t-gray">Crop sales</span> <span className="amtdata  fnt-bld">20% Off</span></div>
                                                                     <ProgressBar now={60} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                        <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td><span className="amtdata fnt-bld">200K</span><br/><span className="t-gray">Goal</span></td>
                                                                <td className="text-center"><span className="amtdata fnt-bld">60%</span><br/><span className="t-gray">Funded</span></td>
                                                                <td className="text-end"><span className="amtdata fnt-bld">105</span><br/><span className="t-gray">Investor</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                    <Image src="assets/images/project3.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}><hr/></td>
                                                            </tr>                                                           
                                                            <tr>
                                                                <td colspan={2}>
                                                                     <div><span className="t-gray">Crop sales</span> <span className="amtdata  fnt-bld">20% Off</span></div>
                                                                     <ProgressBar now={60} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                        <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td><span className="amtdata fnt-bld">200K</span><br/><span className="t-gray">Goal</span></td>
                                                                <td className="text-center"><span className="amtdata fnt-bld">60%</span><br/><span className="t-gray">Funded</span></td>
                                                                <td className="text-end"><span className="amtdata fnt-bld">105</span><br/><span className="t-gray">Investor</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                        <div className="investcardbg">
                                        <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                    <Image src="assets/images/project1.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}><hr/></td>
                                                            </tr>                                                           
                                                            <tr>
                                                                <td colspan={2}>
                                                                     <div><span className="t-gray">Crop sales</span> <span className="amtdata  fnt-bld">20% Off</span></div>
                                                                     <ProgressBar now={60} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                        <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td><span className="amtdata fnt-bld">200K</span><br/><span className="t-gray">Goal</span></td>
                                                                <td className="text-center"><span className="amtdata fnt-bld">60%</span><br/><span className="t-gray">Funded</span></td>
                                                                <td className="text-end"><span className="amtdata fnt-bld">105</span><br/><span className="t-gray">Investor</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                            <div className="investcardbox">
                                                <div className="panelcontentbox">
                                                  <div className="investicon">
                                                    <Image src="assets/images/project2.png" width={20} height={20} alt="icons" />
                                                </div>
                                                 <div className="investcontbox">                                                  
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fnt-bld">FarmFresh IT</td>
                                                                <td className="text-end"><Badge bg="info">Real Estate</Badge></td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}>
                                                                <span className="t-gray invstcnt">Sustainable farming grows eco-friendly, high-qulity crops to nourish communities and protect the environment.</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan={2}><hr/></td>
                                                            </tr>                                                           
                                                            <tr>
                                                                <td colspan={2}>
                                                                     <div><span className="t-gray">Crop sales</span> <span className="amtdata  fnt-bld">20% Off</span></div>
                                                                     <ProgressBar now={60} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        </Table>
                                                        <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td><span className="amtdata fnt-bld">200K</span><br/><span className="t-gray">Goal</span></td>
                                                                <td className="text-center"><span className="amtdata fnt-bld">60%</span><br/><span className="t-gray">Funded</span></td>
                                                                <td className="text-end"><span className="amtdata fnt-bld">105</span><br/><span className="t-gray">Investor</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="sitetable mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <td><Link href="/investorsdetails" id="investnow" className="btn sitebtn w-100">Invest Now</Link></td>                                                              
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                 </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                              </Tab.Content>
                        </Tab.Container> 
                    </Container>
                </section>

              
                <Homefooter />
            </div>
        </>
    )
}

export default Investors