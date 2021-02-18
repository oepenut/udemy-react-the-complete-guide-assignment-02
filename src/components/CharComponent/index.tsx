import React, { CSSProperties } from 'react';

type Props = {
  letter: string;
  click: () => void;
};

const divStyle: CSSProperties = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black',
};

const index = (props: Props) => {
  const { letter, click } = props;

  return (
    <div style={divStyle} onClick={click}>
      {letter}
    </div>
  );
};

export default index;
