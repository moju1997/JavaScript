//
// Javascript Data Structure:
// Object: Map, Class
// Array: List, Set

// Functions on List:
// map:  n to n mapping input.size -> output.size
// flatMap: n to m mapping input.size ~ output.size
// filter: n to m mapping input.size >= output.size
// reduce: n to 1 mapping
// sort: n to n mapping (order will change)

// Use case:
// 1. List to Object conversion
// 2. Object to List conversion
// 3. operations on  List
//      3.1 transform one form to another
//      3.2 filter
//      3.3 sorting
//      3.4 flatten (Nested list)
//      3.5 reduce (Many -> One)

//** 1. List to Map Conversion **/
const userList = [
  { id: 1, name: "Vikas" },
  { id: 2, name: "Ashraf" },
  { id: 3, name: "Chandan" },
  { id: 3, name: "Chandan" },
  { id: 4, name: "Purnima" },
  { id: 4, name: "Purnima" },
];

// Output Map: {key = id, value: object}
/* 
{
    1: { id: 1, name: "Vikas" },
    2: { id: 2, name: "Ashraf" }
}
*/

const userMap = userList.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

//** 2. Map (Object) to List Conversion **//
const uniqueUserList = Object.values(userMap); // Java: Map.keySet, Map.values

//** 3.1 Map: N -> N: List -> List (Transformating element in List) **//
const userList2 = [
  { id: 1, name: "Vikas", attendance: 20, dailyWage: 100 },
  { id: 2, name: "Ashraf", attendance: 25, dailyWage: 101 },
  { id: 3, name: "Chandan", attendance: 22, dailyWage: 100 },
  { id: 4, name: "Purnima", attendance: 18, dailyWage: 103 },
];

const transformedUserList = userList2.map((user) => ({ ...user, wage: user.attendance * user.dailyWage }));
const userNames = userList2.map((user) => user.name);

//** 3.2 Filter: N -> M: List -> List (Filter Element in List) **//
const filteredUserList = userList2.filter((user) => user.attendance >= 20);

//** 3.3 Sort: N -> N: List -> List (Change the order of element) **//
const sortedUserList = [...userList2].sort((a, b) => a.dailyWage - b.dailyWage); // -, 0, +

const userList3 = [
  {
    id: 1,
    name: "Vikas",
    addressList: [
      { id: 1, address: "Bhopal" },
      { id: 2, address: "Bangalore" },
    ],
  },
  {
    id: 2,
    name: "Ashraf",
    addressList: [
      { id: 3, address: "Bhopal" },
      { id: 4, address: "Bangalore" },
    ],
  },
  {
    id: 3,
    name: "Chandan",
    addressList: [
      { id: 5, address: "Patna" },
      { id: 6, address: "E. City" },
    ],
  },
  {
    id: 4,
    name: "Purnima",
    addressList: [
      { id: 7, address: "Bhubneshvar" },
      { id: 8, address: "Vijay Nagar" },
    ],
  },
];

// const addressList = userList3.flatMap((user) => user.addressList.map((address) => ({ ...address, user })));

const addressList = userList3.flatMap(({ addressList, ...user }) =>
  addressList.map((address) => ({ ...address, user }))
);

console.log({
  //   userList,
  //   userList2,
  userList3,
  //   userMap,
  //   uniqueUserList,

  //   transformedUserList,
  //   userNames,
  //   filteredUserList,
  //   sortedUserList,
  addressList: JSON.stringify(addressList),
});
