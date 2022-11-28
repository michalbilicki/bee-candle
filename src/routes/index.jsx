import { Route, Routes, Navigate } from 'react-router-dom'

import { AboutUsComponent } from 'pages/AboutUs'
import { MassageTechniquesComponent } from 'pages/MassageTechniques'
import { ShopComponent } from 'pages/Shop'
import { Pathnames } from './pathnames'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={Pathnames.ABOUT_US} element={<AboutUsComponent />} />
      <Route path={Pathnames.MASSAGE_TECHNIQUES} element={<MassageTechniquesComponent />} />
      <Route path={Pathnames.SHOP} element={<ShopComponent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
