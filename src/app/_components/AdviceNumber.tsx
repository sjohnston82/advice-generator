import React from 'react'

interface AdviceNumberProps {
  id: number;
}

const AdviceNumber = ({id}: AdviceNumberProps) => {
  return (
    <p className="text-neon-green mx-auto text-[11px] font-[600] tracking-[0.335em] mt-10 text-center ml-[3px]">{`ADVICE #${id}`}</p>
  );
}

export default AdviceNumber