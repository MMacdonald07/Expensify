import moment from "moment";

export default [
  {
    id: "1",
    description: "Gum",
    amount: 1.95,
    createdAt: 0,
    note: "",
  },
  {
    id: "2",
    description: "Rent",
    amount: 1095.0,
    createdAt: moment(0).subtract(4, "days").valueOf(),
    note: "",
  },
  {
    id: "3",
    description: "Credit card",
    amount: 45.0,
    createdAt: moment(0).add(4, "days").valueOf(),
    note: "",
  },
];
