type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
        {props.isLoggedIn ? 
           <p>Greet {props.name} {messageCount}</p>
        :
            <p>Welcome Guest.</p>
        }
    </div>
  )
}

export default Greet