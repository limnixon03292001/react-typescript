import {useRef, useEffect, useState } from 'react'

const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

  return (
    <div>
        <p>DomRef</p>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomRef