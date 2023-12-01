import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import "./RouteCompo.css"
import Bird from "../images/bird.png"
const Signin = lazy(()=>import('../components/Signin'));
const SkillsSet = lazy(()=>import('../components/SkillsSet'));
const Employee = lazy(()=>import('../components/Employee'));
const RoleSelection = lazy(()=>import('../components/RoleSelection'));
const OtpVerify = lazy(()=>import('../components/OtpVerify'));
function RouteCompo() {
  return (
    <div>
        <BrowserRouter>
          <Suspense fallback={<div className='route-lazy-parent'><img src={Bird} alt='imglazy' className='lazy-img'/></div>}>
            <Routes>
              <Route path='/' element={<Signin/>}/>
                {/* <Route path='/otpverify' element={<OtpVerifyIn/>}/> */}
                <Route path='/otpverify' element={<OtpVerify/>}/>
                <Route path='/selectrole' element={<RoleSelection/>}/>
                <Route path='/employer' element={<Employee/>}/>
                <Route path='/corporatetrainer' element={<SkillsSet/>}/>

            </Routes>
            </Suspense>
        </BrowserRouter>

    </div>
  )
}

export default RouteCompo