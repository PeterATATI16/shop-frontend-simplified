export function FETCH_DATA(state,singleData,inData){
    state[inData].unshift(singleData)
}

export function NEW_DATA(state,newData,inData){
    state[inData].unshift(newData)
}

export function UPDATE_DATA(state, singleData, inData, updated) {
    const index = state[singleData].findIndex(mdle => mdle.id === updated.id)

    if (index !== -1) {
        state[inData].splice(index, 1, updated);
    }
}

export function DELETE_DATA(state, id, state_name) {
    state[state_name] = state[state_name].filter(mdle => mdle.id !== id);
}