import { PersonProps } from "./Types/PersonTypes"

const Person = (props: PersonProps) => {
  return (
    <div>
        <p>{props.fullName.firstName} {props.fullName.lastName}</p>
    </div>
  )
}

export default Person