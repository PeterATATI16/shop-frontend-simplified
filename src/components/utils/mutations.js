export function DELETE_DATA(state, id, state_name) {
    state[state_name] = state[state_name].filter(mdle => mdle.id !== id);
}

export function UPDATE_DATA(state, singleData, inData, updated) {
    const index = state[singleData].findIndex(mdle => mdle.id === updated.id)

    if (index !== -1) {
        state[inData].splice(index, 1, updated);
    }
}

