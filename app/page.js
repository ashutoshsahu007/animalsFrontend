import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Navbar from "@/components/common/navbar";
import Herosection from "@/components/common/herosection";
import Dashboard from "@/components/common/dasboard";
import ImageGrid from "@/components/pet/image";
import Services from "@/components/pet/services";
import Recoginied from "@/components/pet/Recoginied";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col mb-8  bg-black  font-poppins">
    
    <Herosection/>
  </div>
  
  <Dashboard/>
  <ImageGrid/>
  <Services/>
  <Recoginied/>
 
  </div>
  );
}
