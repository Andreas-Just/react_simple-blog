export const ACTION_TYPE = {
  SELECT_AUTHOR: 'select_author',
};

export function selectAuthor(selectedIndex) {
  return {
    type: ACTION_TYPE.SELECT_AUTHOR,
    selectedIndex
  };
}