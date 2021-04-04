function addProject(request) {
    return {
        type: "ADD_REQUEST",
        payload: request,
    }
}

export default addProject