const saveToDo = (...args) => {
    const fillSave = Object.assign({}, {...args})

    return {fillSave}
}

export default saveToDo;