import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OtpVerify from '../components/OtpVerify'
import RoleSelection from '../components/RoleSelection'
import Employee from '../components/Employee'
import SkillsSet from '../components/SkillsSet'
import Signin from '../components/Signin'

function RouteCompo() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Signin/>}/>
                {/* <Route path='/otpverify' element={<OtpVerifyIn/>}/> */}
                <Route path='/otpverify' element={<OtpVerify/>}/>
                <Route path='/selectrole' element={<RoleSelection/>}/>
                <Route path='/employer' element={<Employee/>}/>
                <Route path='/corporatetrainer' element={<SkillsSet/>}/>

            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default RouteCompo