
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition =  'top' | 'center' | 'bottom';

type ToastProp = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center' |'top-left'
    // if we want to exclude something or add something..
}

const Toast = ({ position }: ToastProp) => {
  return (
    <div>Position: {position}</div>
  )
}

export default Toast