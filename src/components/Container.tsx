interface ContainerProps {
    styles: React.CSSProperties
} // i just use interface instead of type cuz i just want to see..

const Container = (props: ContainerProps) => {
  return (
    <h2 style={props.styles}>TYPESCRIPT</h2>
  )
}

export default Container