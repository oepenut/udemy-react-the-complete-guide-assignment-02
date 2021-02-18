import React from 'react';

type Props = {
  textLength: number;
};

const index = (props: Props) => {
  const length = props.textLength;

  let text = <p>Text it's too short</p>;
  if (length >= 5) text = <p>Text it's long enough</p>;

  return <div>{text}</div>;
};

export default index;
