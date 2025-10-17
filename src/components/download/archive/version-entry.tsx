// VersionEntry Component
interface VersionEntryProps {
    // The version string, e.g., "6.2.0"
    version: string;
    // The release date string in a standard format, e.g., "2020-05-15"
    releaseDate?: string;
    // Optional URL to the version's download page
    href?: string;
    // Optional flags indicating special version types
    flags?: VersionFlag[];
}

const VersionEntry = ({ version, releaseDate, flags = [], href }: VersionEntryProps) => {
    const formattedDate = releaseDate ? formatReleaseDate(releaseDate) : undefined;
    return (
        <p>
            <a href={href}>NetLogo {version}</a> {formattedDate && `(Released ${formattedDate})`}
            {flags.map((flag) => (
                <VersionFlagBadge key={flag} flag={flag} />
            ))}
        </p>
    )
}

// VersionFlagBadge Subcomponent
type VersionFlag = 'BETA' | 'RC' | 'REVISION';

const versionFlagStyles: { [key in VersionFlag]: string } = {
    BETA: "badge bg-warning text-dark me-1 ms-2",
    RC: "badge bg-info text-dark me-1 ms-2",
    REVISION: "badge bg-secondary me-1 ms-2",
};

const versionFlagTexts: { [key in VersionFlag]: string } = {
    BETA: "Beta",
    RC: "Release Candidate",
    REVISION: "Revision",
};


const VersionFlagBadge = ({ flag }: { flag: VersionFlag }) => {
    let badgeText = versionFlagTexts[flag];
    let badgeClass = versionFlagStyles[flag];

    return <span className={badgeClass} title={badgeText} role="alert">{badgeText}</span>;
};

// Utilities
const formatReleaseDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export type { VersionEntryProps };
export default VersionEntry;