import React from 'react';
import { string } from 'prop-types';
interface propsType {
  items: [],
}
export default function Glossary(props: propsType) {
  interface itemType {
    id: number,
    term: string,
    description: string
  }
  return (
    <dl>
      {props.items.map((item: itemType) => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
