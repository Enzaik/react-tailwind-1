import React from 'react';
import ListItemVertical from './ListItemVertical';

function ListItems({ list }) {
  const items = list.map(({ url, price, beds, baths, stars, description }) => (
    <ListItemVertical url={url} price={price} beds={beds} baths={baths} stars={stars} description={description} />
  ));

  return items;
}

export default ListItems;
