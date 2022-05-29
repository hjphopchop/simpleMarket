export const setCategory = (categoryID) => ({
  type: "SET_CATEGORY",
  payload: categoryID,
});

export const setSort = ({ type, order }) => ({
  type: "SET_SORT",
  payload: { type, order },
});
