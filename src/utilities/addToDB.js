const getStoredBook = () => {
  const storedDataStr = localStorage.getItem("readList");
  if (storedDataStr) {
    const storedBookData = JSON.parse(storedDataStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const storedData = getStoredBook();
  if (storedData.includes(id)) {
    alert("Book already exist");
  } else {
    storedData.push(id);
    const data = JSON.stringify(storedData);
    localStorage.setItem("readList", data);
  }
};

export { addToLocalStorage, getStoredBook };
