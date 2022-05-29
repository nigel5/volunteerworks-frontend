import React from 'react';
import Config from "../config.json";

export const JobContext = React.createContext();

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = React.useState({});
    React.useEffect(() => {
        fetch(`/job`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setJobs(res);
            });
    }, []);

    return (
        <JobContext.Provider
            value={{
                jobs,
                setJobs
            }}
            >
            {children}
        </JobContext.Provider>
    );
}