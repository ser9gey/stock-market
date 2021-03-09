import './allProjects.scss';
import Offer from '../Offer/Offer';
import { Fragment, useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {dataBase} from '../../firebase';
import addProject from '../../actions/addProject';

const AllProjects = () => {

    // const [offers, setOffers] = useState([]);
    // console.log(offers)

    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);

    useEffect(() => {
        dataBase.ref('projects/').orderByChild("profileUid").equalTo(profile.uid).on('value', projects => {
            dispatch(addProject(projects.val()))
        })
    },[])

    // Object.keys(projects).map( el => console.log(projects[el]) )//????????
    
    const offer = Object.keys(projects).map( id => {
        return <Offer key={id} projects={projects[id]} />
    } )



    // useEffect(() => {
    //     // dataBase.ref('projects/').orderByChild("profileUid").equalTo(profile.uid).on('value', data => console.log(data.val()))

    //     dataBase.ref('projects/').orderByChild("profileUid").equalTo(profile.uid).on('value', data => {
    //         // Object.values(data.val()).map(project => setOffers(offers => [...offers, project]))

    //         setOffers({...offers, ...data.val()})
    //     })
    // },[profile.uid])

    // useEffect(() => {
    //     // dataBase.ref('projects/').orderByChild("profileUid").equalTo(profile.uid).on('value', data => console.log(data.val()))

    //     dataBase.ref('projects/').orderByChild("profileUid").equalTo(profile.uid).on('value', data => {
    //         setOffers({...offers, ...data.val()})
    //     })
    // },[profile.uid])


    // const offer = profile.projects.map((offer) => {
    //     return (
    //         <Offer />
    //     )
    // }) //доделать массив элементов

    // {
    //     Object.keys(projects).map(projectId => {
    //         return <div key={projectId}>
    //                  {projects[projectId].name}
    //                </div>
    //     })
    //  }

    //  selectUserIds = state => state.users.map(user => user.id);

    return (
        <Fragment>
            {offer}
        </Fragment>
    )
}

export default AllProjects;