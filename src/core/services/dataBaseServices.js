import {dataBase} from '../../core/api/firebase';

export const sendProfile = async (uid, values) => {
    await dataBase.ref('profiles/' + uid).update({
        name: values.name,
        surname: values.surname,
        profession: values.proff,
        skills: values.skills,
        level: values.level,
    })

    return await dataBase.ref('profiles/' + uid).once("value")
}

export const addNewProject = async (uid, values) => {
    const newProjectRef = await dataBase.ref('projects/').push()

    await newProjectRef.set(
        {
            nameCompany: values.nameCompany,
            nameProject: values.nameProject,
            descriptionProject: values.descriptionProject,
            requiredProfession: values.requiredProfession,
            requiredSkills: values.requiredSkills,
            payment: values.payment,
            profileUid: uid,
            projectId: newProjectRef.key,
        }
    )

    return await dataBase.ref('projects/').limitToLast(1).once('value')
}

export const createdUser = async (uid, email, path) => {
    await dataBase.ref('profiles/' + uid).set({
        name: "",
        surname: "",
        profession: "",
        skills: "",
        level: "",
        email: email,
        role: path.includes("users") ? "user" : "company",
        uid: uid,
        info: "",
    })

    return await dataBase.ref('profiles/' + uid).once('value')
}

export const sendedReques = async (uid, project) => {
    const newRequestRef = await dataBase.ref('requests/').push()

    await newRequestRef.set({
        userUid: uid,
        companyUid: project.profileUid,
        projectUid: project.projectId,
        requestUid: newRequestRef.key,
    })
}

export const sendedProfileCompany = async (uid, info) => {
    await dataBase.ref('profiles/' + uid).update({
        info,
    })

    return await dataBase.ref('profiles/' + uid).once('value')
}

export const acceptedRequest = async (requestUid) => {
    await dataBase.ref('requests/' + requestUid).update({status: 'accepted'});
}

export const rejectedRequest = async (requestUid) => {
    await dataBase.ref('requests/' + requestUid).update({status: 'rejected'});
}

export const watchувChangesOnce = async (requestUid) => {
    return await dataBase.ref('requests/' + requestUid).once('value');
}

export const allProjects = async () => {
    return await dataBase.ref('projects/').once('value')
}

export const allRequests = async () => {
    return await dataBase.ref('requests/').once('value')
}

export const RequstsData = async (snapshot) => {
    const promises = Object.values(snapshot).map( el => {
        return Promise.all([dataBase.ref('profiles/' + el.userUid).once('value'), dataBase.ref('projects/' + el.projectUid).once('value')])
        .then(result => {
            return {
                [el.requestUid]: {
                    profile: result[0].val(),
                    project: result[1].val(),
                    ...el
                }
            }
        })
    })

    return Promise.all(promises)
}

export const projectsOrderedByProfileUid = async (uid) => {
    return await dataBase.ref('projects/').orderByChild("profileUid").equalTo(uid).once('value')
}

export const requestsOrderedByCompanyUid = async (uid) => {
    return await dataBase.ref('requests/').orderByChild('companyUid').equalTo(uid).once('value')
}