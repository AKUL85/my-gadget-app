const get = (key) => {
    const getStoredData = localStorage.getItem(key);
    if (getStoredData) {
        return JSON.parse(getStoredData);
    }
    return [];
};

const removeFromLocalstorage = (key, id) => {
    const data = get(key);
    const updatedData = data.filter(i => i !== id && i != id); // handles string/number mismatch
    localStorage.setItem(key, JSON.stringify(updatedData));
};


export{removeFromLocalstorage};