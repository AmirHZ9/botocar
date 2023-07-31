import React from "react";
import styles from "./CarPage.module.css"
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

function CarPage(props) {
    const {id,image,name,model,year,distance,price,location} = props.carsData
  return (
    <Link href={`/cars/${id}`}>
    <div className={styles.CarPage}>
      <img src={image} alt={name} className="object-cover min-h-[349px]" />
      <div className="mt-2 ">
        <div className="flex items-center font-bold">
          <p className="mr-1">{name}</p>
          <span>{model}</span>
        </div>
        <span className="mr-1 text-sm">{year}</span>.
        <span className="ml-1 text-sm">{distance}m</span>
      </div>
      <div className=" flex justify-between items-center mt-5 font-bold">
        <span className="bg-[#befa00] px-2 py-1 rounded-lg">
          {price} $
        </span>
        <span className=" flex items-center">
          {location}{" "}
          <span className="ml-1">
            <GrLocation />
          </span>
        </span>
      </div>
    </div>
    </Link>

  );
}

export default CarPage;
