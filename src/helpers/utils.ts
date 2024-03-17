import { getScaledValue } from '@rnv/renative';
import { screenRatio } from './device';

export function modeArray(array: any[], field: string) {
  if (array.length == 0) return null;
  var modeMap: any = {};
  var maxEl = array[0][field],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i][field];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

export function getSessionOfDay() {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr <= 12 && curHr > 3) {
    return 'morning';
  } else if (curHr <= 15 && curHr > 12) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

const minCols = 1;

export const calcNumColumns = (width: number) => {
  if (screenRatio < 1) return minCols;
  const cols = width / getScaledValue(300);
  const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
  const colsMinusMargin = cols - 2 * colsFloor;
  if (colsMinusMargin < colsFloor && colsFloor > minCols) {
    return colsFloor - 1;
  } else return colsFloor;
};

export const formatData = (data: any[], numColumns: number) => {
  const amountFullRows = Math.floor(data.length / numColumns);
  let amountItemsLastRow = data.length - amountFullRows * numColumns;
  const newData = [...data];
  while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
    newData.push({ key: `empty-${amountItemsLastRow}`, empty: true });
    amountItemsLastRow++;
  }
  return newData;
};
