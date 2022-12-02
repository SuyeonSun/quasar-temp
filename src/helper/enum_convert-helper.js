export const convertNumberToBool = (object, value) => {
    return Object.values(object).find((obj) => obj.index === value)?.value;
};

export const convertBoolToNumber = (object, value) => {
    return Object.values(object).find((obj) => obj.value === value)?.index;
}