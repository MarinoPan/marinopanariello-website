interface SingleWorkProps {
    project: string;
    year: string;
    results: string;
    roles: string;
    about: string;
}

export const SingleWork = ({
    project,
    year,
    results,
    roles,
    about,
}: SingleWorkProps) => {
    return (
        <div className="grid grid-cols-12 gap-4 mt-48">
            <div className="col-span-4 flex flex-col gap-24">
                <h3>{project}</h3>
                <div className="flex flex-col gap-12 ">
                    <div className="grid grid-cols-4 gap-4">
                        <h4 className="col-span-1">Year</h4>
                        <p className="col-span-3 self-center">{year}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <h4 className="col-span-1">Results</h4>
                        <p className="col-span-3">{results}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <h4 className="col-span-1">Roles</h4>
                        <p className="col-span-3 font-bold text-gray-light">
                            {roles}
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <h4 className="col-span-1">About</h4>
                        <p className="col-span-3">{about}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-8 flex flex-col gap-6">
                <img
                    src="/images/projects/docsity-1-after.jpg"
                    alt="Project placeholder 1"
                />
            </div>
        </div>
    );
};
