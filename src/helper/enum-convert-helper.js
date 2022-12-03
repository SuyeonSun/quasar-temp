export const convertIndexToValue = (data, index) => {
    return Object.values(data).find((ele) => ele.index === index)?.value;
}

export const convertValueToIndex = (data, value) => {
    // ele.value : data의 value인 1, 2
    // value: 1, 2
    return Object.values(data).find((ele) => ele.value === value)?.index;
}