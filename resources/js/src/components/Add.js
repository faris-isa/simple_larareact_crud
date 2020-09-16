import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import AppContainer from './AppContainer';
import api from '../api';

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');

    const onAddSubmit = async() => {
        setLoading(true);
        try{
            await api.addName({
                name, question
            })
            history.push('/');
        } catch {
            alert('Failed to add name!');
        } finally {
            setLoading(false);
        };
    };

    return (
        <AppContainer
        title = "Add Post"
        >
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Question</label>
                    <input className="form-control" type="text"
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={onAddSubmit}
                        disable={loading}
                        > {loading ? 'LOADING .....' : 'ADD'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;
