
type ArrayListProps<T> = {
    arr: T[] 
    onClick: (value: T) => void
}

const ArrayList = <T extends {}>({ arr, onClick }: ArrayListProps<T>) => {
 
  return (
    <div>';'
        <h2>Array List</h2>
        {arr.map((item, id) => (
            <i key={id} onClick={() => onClick(item)}>
                {/* {item} */}
                {JSON.stringify(item)}
            </i>
        ))}
    </div>
  )
}

export default ArrayList