import {Outlet} from "react-router-dom"

import {Headers} from "../components/headers/Headers";


const MainLayout = () => {
  return (
      <div>
          <Headers/>
          <Outlet/>
      </div>
  )
}

export {MainLayout};