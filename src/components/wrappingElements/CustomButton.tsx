
type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
//this omit is we are omiting or removing children property to button element 
//we are setting up a restriction to this Custom button, which is the chilren prop will only accept string instead of react.reactnode which is an element.

{/* <React.ComponentProps<'button'> */}
// and we want to also include the other props that we are passing in juslike onClick, children

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}

export default CustomButton