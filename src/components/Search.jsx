import React from "react";
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
const Search = () => {
  return (
    <div className="p-2 flex md:p-3 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row  gap-10 px-5 items-center w-[60%] ">
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-bold">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="Vertical" className="hidden md:block" />
      <Select>
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

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none font-bold">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div>
        <CiSearch className="bg-primary rounded-full p-3 text-[50px] text-white cursor-pointer hover:bg-[#0000ff80] transition-all ease-in-out duration-300" />
      </div>
    </div>
  );
};

export default Search;
