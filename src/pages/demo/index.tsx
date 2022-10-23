import { memo, useState, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Foo } from './style'

const Demo = memo(() => {
  const [state, setState] = useState(false);
  const helloRef = useRef<any>(null);
  const goodbyeRef = useRef(null);
  const nodeRef = state ? goodbyeRef : helloRef;

  return (
    <Foo>
   <SwitchTransition>
     <CSSTransition
       key={state ? "Goodbye, world!" : "Hello, world!"}
       addEndListener={() => console.log(123)}
          classNames='fade'
      timeout={1000}
     >
       <button onClick={() => setState(state => !state)}>
         {state ? "Goodbye, world!" : "Hello, world!"}
       </button>
     </CSSTransition>
   </SwitchTransition>
    </Foo>
  )
})

export default Demo
