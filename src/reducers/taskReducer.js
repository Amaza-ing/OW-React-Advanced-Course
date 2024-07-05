const initState = {
  tasks: [
    {
      id: "1",
      title: "Comprar la cena",
      completed: false,
    },
    {
      id: "2",
      title: "Cocinar",
      completed: false,
    },
    {
      id: "3",
      title: "Cenar",
      completed: false,
    },
    {
      id: "4",
      title: "Lavar los platos",
      completed: false,
    },
  ],
  hasLoaded: true,
  hasError: false
};

const taskReducer = (state = initState, action) => {
  return state;
};

export default taskReducer;