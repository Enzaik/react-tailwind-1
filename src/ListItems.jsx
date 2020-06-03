import React from 'react';
import ListItemVertical from './ListItemVertical';

function ListItems({ list }) {
  const items = list.map(({ url }) => <ListItemVertical url={url} />);

  return items;
}

export default ListItems;
