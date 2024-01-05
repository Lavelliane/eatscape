"use client"

import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button"
import { useState } from "react";

function HomePage() {
  
  return (
    <>
      <Sidebar>
        <h1>Hello</h1>
        <Button text="I love you"/>
      </Sidebar>
    </>
  );
}
export default HomePage;



