import React from 'react';

const ColorBlock = ({ children, className, id, ...props }) => {
  const style = `p-2 flex grow shrink items-center justify-center ${className}`;

  return (
    <div id={id} className={style} {...props}>
      {children}
    </div>
  );
};

const ColorBlockGroup = ({ children, className, ...props }) => {
  const style = `w-full flex flex-wrap flex-col ${className}`;
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
};

ColorBlock.Group = ColorBlockGroup;

export default ColorBlock;
