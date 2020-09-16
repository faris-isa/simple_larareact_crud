import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from "./AppContainer";
import api from '../api';

{/* <Link to={path}>{name}</Link> */}


const Home = () => {
    const [names, setNames] = useState(null);

    const fetchName = () => {
        api.getAllNames().then(res => {
            const result = res.data;
            setNames(result.data);
        })
    }

    useEffect(() => {
        fetchName();
    }, []);

    const renderNames = () => {
        if(!names){
            return (
                <tr>
                    <td colSpan="4">
                        Loading Data ........
                    </td>
                </tr>
            );
        }
        if(names.length === 0){
            return (
                <tr>
                    <td colSpan="4">
                        Yep no name. Add one
                    </td>
                </tr>
            );
        }
        return names.map((name) => (
            <tr key={name.id}>

                <td>{name.id}</td>
                <td>{name.name}</td>
                <td>{name.question}</td>
                <td>
                    <Link 
                        className="btn btn-warning" 
                        to={`/edit/${name.id}`}
                    >
                        Edit
                    </Link>
                    <button 
                        type="button"
                        className="btn btn-danger" 
                        onClick={() => {
                            api.deleteName(name.id).then(fetchName).catch(err => {
                                alert("Failed to delete post with id :" + name.id);
                            });
                        }}
                    >
                        Delete
                    </button>

                </td>
            </tr>
        ));
    }

    return (
        <AppContainer
        title="Laravel ReactJS - CRUD">
            <Link to="/add" className="btn btn-primary">Add</Link>
                    <div className="table-responsive">
                        <table className="table table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>ID.</th>
                                    <th>Name</th>
                                    <th>Question</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderNames()}
                            </tbody>
                        </table>
                    </div>
        </AppContainer>
    );
};

export default Home;
