import * as React from 'react';

import {TodoListItem} from '../components/TodoListItem';

interface Props {
  key: string;
  text: string;
}

export const TodoListItemContainer = ({key, text}: Props) => (
  <TodoListItem key={key} text={text} />
);
