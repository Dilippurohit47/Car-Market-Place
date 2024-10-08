import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";

import Data from "@/shared/Data";
import { Link } from "react-router-dom";
const Search = () => {
  const [cars, setCars] = useState();
  const [make, setMake] = useState();
  const [price, setPrice] = useState();

  return (
    <div className="p-2 flex md:p-3 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row  gap-10 px-5 items-center w-[80%] md:w-[60%] ">
      <Select onValueChange={(value) => setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-bold">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent className="w-2">
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Old">Old</SelectItem>
          <SelectItem value="Certified pre-owned">
            Certified pre-owned
          </SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="Vertical" className="hidden md:block" />
      <Select onValueChange={(value) => setMake(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-bold">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakesList.map((maker, index) => (
            <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="Vertical" className="hidden md:block" />

      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-bold">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Link to={"/search?cars=" + cars + "&make=" + make + "&price=" + price}>
        <CiSearch className="bg-primary rounded-full p-3 text-[50px] text-white cursor-pointer hover:bg-[#0000ff80] transition-all ease-in-out duration-300" />
      </Link>
    </div>
  );
};

export default Search;
