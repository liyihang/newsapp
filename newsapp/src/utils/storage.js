export const GetItem = name => {
    const data = window.localStorage.getItem(name)
    try {
        return JSON.parse(data)
    } catch (err) {
        return err
    }
}

export const SetItem = (name, value) => {
    if(typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(name, value) 
}

export const removeItem = name => {
    window.localStorage.removeItem(name)
}
