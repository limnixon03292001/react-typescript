import React from "react"
import Greet from "../Greet";


//Extracting components props types, we use this to extract props of a component especially if we cant access also their types
const CustomeComponent = (props: React.ComponentProps<typeof Greet>) => {
    console.log(";;", (typeof Greet));
  return (
    <div>{props.name}</div>
  )
}

export default CustomeComponent