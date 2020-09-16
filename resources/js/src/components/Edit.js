import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import AppContainer from './AppContainer';
import api from '../api';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');

    const onEditSubmit = async() => {
        setLoading(true);
        try{
            await api.updateName({
                name, question
            }, id);
            history.push('/');
        } catch {
            alert('Failed to Edit name!');
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        api.getOneName(id).then(res => {
            const result = res.data;
            const name = result.data;  
            setName(name.name);
            setQuestion(name.question);

        })
    }, []);

    return (
        <AppContainer
        title = "Edit Name"
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
                        onClick={onEditSubmit}
                        disable={loading}
                        > {loading ? 'LOADING .....' : 'Edit'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Edit;
