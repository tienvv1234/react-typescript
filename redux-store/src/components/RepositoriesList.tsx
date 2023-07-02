import { FC, useState } from 'react';

const RepositoriesList: FC = () => {
    const [term, setTerm] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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