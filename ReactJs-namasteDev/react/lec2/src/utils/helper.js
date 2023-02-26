export const filterData = (searchText, biryanis) => {
  const filterDatab = biryanis.filter((bir) => {
    // console.log(bir.data.name);
    return bir?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });

  return filterDatab;
};
