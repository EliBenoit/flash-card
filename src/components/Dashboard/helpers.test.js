// import
import { filterCategory, getCategoryOptions } from "./helpers";

const testObj = {
    question: "test?",
    answer: "réponse",
    category: "Learning"
};

test('filterCategory should return true', () => {
  expect(filterCategory(testObj, "learning")).toBe(true);
});

test('filterCategory should return false', () => {
  expect(filterCategory(testObj, "noCategory")).toBe(false);
});

test('getCategoryOptions should return five string', () => {
  expect(getCategoryOptions("full")).toHaveLength(5);
  expect(getCategoryOptions("full")).toStrictEqual(["noCategory", "unknow", "learning", "knowing", "perfect"])
});

test('getCategoryOptions should return four string', () => {
  expect(getCategoryOptions("")).toHaveLength(4);
  expect(getCategoryOptions("")).toStrictEqual(["unknow", "learning", "knowing", "perfect"])

    expect(getCategoryOptions("test")).toHaveLength(4);
  expect(getCategoryOptions("test")).toStrictEqual(["unknow", "learning", "knowing", "perfect"])
});