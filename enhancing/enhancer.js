module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return item.enhancement < 20
    ? { ...item, enhancement: item.enhancement + 1 }
    : { ...item};
}

function fail(item) {
  const {enhancement, durability} = item;
  if (enhancement > 16) return { ...item, enhancement: enhancement - 1} &&
  enhancement < 15 ? {...item, durability: durability - 5} : {...item, enhancement: enhancement -1, durability: durability - 10};
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
