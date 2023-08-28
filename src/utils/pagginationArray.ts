import TGame from "../types/Game";

const pagginationArray = (arrayGames: TGame[]): TGame[][] => {
  let result = [];
  let splicedArray = arrayGames;
  while (splicedArray.length > 20) {
    result.push(splicedArray.splice(0, 20));
  }
  if (splicedArray.length > 0) {
    result.push(splicedArray.splice(0));
  }

  return result;
};

export default pagginationArray;
