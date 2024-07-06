import { atom } from "recoil";

export const taskListState = atom({
  key: "taskList",
  default: [
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
  ]
})