// fetching data

export const getData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

//deleting data

export const deleteData = id => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
