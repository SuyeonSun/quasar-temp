export const convertIndexToValue = (data, index) => {
    return Object.values(data).find((ele) => ele.index === index)?.value;
}

export const convertValueToIndex = (data, value) => {
    return Object.values(data).find((ele) => ele.value === value)?.index;
}