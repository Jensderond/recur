import * as React from 'react';

export interface ITitleProps {
  title: string
}

export default function Title (props: ITitleProps) {
    return (
      <div>
        <h1 className="text-3xl mb-2">{props.title}</h1>
      </div>
    );
}
