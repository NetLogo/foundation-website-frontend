import VersionEntry, { type VersionEntryProps } from './version-entry';

export interface VersionListProps {
    versions: VersionEntryProps[];
}

const VersionList = ({ versions }: VersionListProps) => {
    return (
        <ol className='list-unstyled ms-5'>
            {versions.map((versionInfo) => (
                <li key={versionInfo.version}>
                    <VersionEntry {...versionInfo} />
                </li>
            ))}
        </ol>
    );
};

export default VersionList;