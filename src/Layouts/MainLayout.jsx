import React, { Fragment } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <Fragment>
        <Navbar/>
        <Outlet/>
        {/* footer */}
    </Fragment>
  )
}
