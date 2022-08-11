import { FullName } from "./Types/PersonTypes"

type PersonListProps = {
    nameList: FullName[]
}
const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {props.nameList.map((data,i) => (
            <p key={i}>{data.firstName} {data.lastName}</p>
        ))}
    </div>
  )
}

export default PersonList