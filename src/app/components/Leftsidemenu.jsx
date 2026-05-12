'use client'
import React from "react";
import Link from 'next/link';
import { Image, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'


const Leftsidemenu = () => {

  const pathname = usePathname()

  function closeCollapse() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  function menuclick() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }
  return (

    <div className="leftsidemenu" id="leftsidemenu">
      <div className="closeiconbtn" onClick={closeCollapse}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="leftsidescroll">
        <ul>
          <li><Link id="dashboardlink" href="/dashboard" className={`titlemenu ${pathname === '/dashboard' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/homeicon.svg" alt="icon" width={100} height={100} /></i><div>Dashboard</div></Link></li>      
          <li><Link id="myaccountlink" className={`titlemenu ${pathname === '/profile' ? 'active' : ''}`} href="/profile"><i><Image src="assets/images/usericon.svg" alt="icon" width={100} height={100} /></i><div>My Account</div></Link></li>
          <li><Link id="securitylink" className={`titlemenu ${pathname === '/agent' ? 'active' : ''}`} href="/agent"><i><Image src="assets/images/agenticon.svg" alt="icon" width={100} height={100} /></i><div>Agent</div></Link></li>
          <li><Link id="securitylink" className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security"><i><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></i><div>Security</div></Link></li>
          <li><Link id="kyclink" className={`titlemenu ${pathname === '/kyc' ? 'active' : ''}`} href="/kyc"><i><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></i><div>KYC</div></Link></li>
          <li><Link id="reflink" className={`titlemenu ${pathname === '/referral' ? 'active' : ''}`} href="/referral"><i><Image src="assets/images/reficon1.svg" alt="icon" width={100} height={100} /></i><div>Referral</div></Link></li>           
          <li><Link id="supportlink" className={`titlemenu ${pathname === '/support' ? 'active' : ''}`} href="/support"><i><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li>         
          <li><Link href="#" className="titlemenu logout" id="logoutlink"><i><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></i><div>Logout</div></Link></li>
        </ul>
      </div>

         
    </div>
  )
}

export default Leftsidemenu