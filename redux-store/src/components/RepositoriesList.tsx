import { FC, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
const RepositoriesList: FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, loading, error } = useTypedSelector((state) => state.repositories);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList;