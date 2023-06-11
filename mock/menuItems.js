import { BsBook } from "react-icons/bs";

import { RiFireLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
import { GiKitchenScale } from "react-icons/gi";
import { FaCouch, FaBed } from "react-icons/fa"; 

const menuItems = [
  { category: "Kitchen", icon: GiKitchenScale },
  { category: "LivingRoom", icon: FaCouch }, 
  { category: "Bathroom", icon: AiOutlineHome },
  { category: "BedRoom", icon: FaBed }, 
  { category: "Office", icon: BsBook },
];

export default menuItems;

export const extraMenu = [
  { title: "offer", icon: AiOutlinePercentage, href: "/offers" },
  { title: "bestSells", icon: RiFireLine, href: "/" },
];
