import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
}

export interface SearchManufacturerProps {
  searchManufacturer: string;
  setSearchManufacturer: (searchManufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string,
  year: number;
  fuel: string;
  limit: number;
  model: string
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  options: OptionsProps[];
  setFilter: (value: any) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}