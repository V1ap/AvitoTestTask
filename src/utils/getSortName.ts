const getSortName = (sort: string) => {
  return sort === "Алфавиту"
    ? "alphabetical"
    : sort === "Дате выхода"
    ? "release-date"
    : sort === "Популярности"
    ? "popularity"
    : "relevance";
};

export default getSortName;
