import { invalidImg } from "../../constants/api";

export const makingList = (element, allItems) => {
  if (element === "character") {
    allItems = allItems
      .sort((a, b) => b.stories.available - a.stories.available)
      .filter((x) => x.thumbnail.path !== invalidImg)
      .map((x) => {
        return {
          name: x.name,
          image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
          id: x.id,
        };
      });
  }
  if (element === "event" || element === "serie") {
    allItems = allItems
      .filter((x) => x.thumbnail.path !== invalidImg)
      .map((x) => {
        return {
          name: x.title,
          image: `${x.thumbnail.path}.${x.thumbnail.extension}`,
          id: x.id,
        };
      });
  }
  if (element === "comic") {
    allItems = allItems
      .sort((a, b) => b.characters.available - a.characters.available)
      .filter((comic) => comic.images[0])
      .map((x) => {
        return {
          name: x.title,
          image: `${x.images[0].path}.${x.images[0].extension}`,
          id: x.id,
        };
      });
  }
  allItems = allItems.slice(0, 20);
  return allItems;
};
