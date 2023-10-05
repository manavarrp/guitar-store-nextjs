"use client"

import ListGuitars from "./components/ListadoGuitarras";
import ListadoPosts from "./components/ListadoPosts";
import Course from "./components/curso";
import DashboardLayout from "./dashboard/layout";

export default function Home() {
 
  
  return  (
    <DashboardLayout>
      <ListGuitars />
      <Course />
      <ListadoPosts />
    </DashboardLayout>
  )
}
