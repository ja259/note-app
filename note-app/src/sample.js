import uniqid from "uniqid";

let sample = [
  {
    id: uniqid(),
    title: "Dinner Planning",
    note:
      "Planning, preparing, and portioning your meals ahead of time is one of the most effective tools for keeping your food budget in check",
    list: [],
    project: "dinner",
    date: "2021-12-17",
  },
  {
    id: uniqid(),
    title: "My Shopping List",
    note: "need to go to that market",
    list: [
      { name: "way protein", completed: true, id: uniqid() },
      { name: "paper towels", completed: false, id: uniqid() },
      { name: "after shave", completed: true, id: uniqid() },
      { name: "bread", completed: false, id: uniqid() },
    ],
    project: "to-buy",
    date: "2020-12-17",
  },
];

export default sample;