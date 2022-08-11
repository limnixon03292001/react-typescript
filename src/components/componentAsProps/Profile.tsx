
export type ProfileProps = {
    name: string
}

const Profile = ({ name }: ProfileProps) => {
  return (
    <div>This my Profile: {name}</div>
  )
}

export default Profile