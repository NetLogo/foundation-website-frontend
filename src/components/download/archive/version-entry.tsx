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
    // Optional short description (0-2 sentences) or list of key features
    blurb?: string | string[];
}

const VersionEntry = ({ version, releaseDate, flags = [], href, blurb }: VersionEntryProps) => {
    const formattedDate = releaseDate ? formatReleaseDate(releaseDate) : undefined;

    return (
        <>
            <a href={href}>NetLogo {version}</a>
            {formattedDate && (
                <span className="timeline-date">{formattedDate}</span>
            )}
            {flags.length > 0 && (
                <span className="mt-1">
                    {flags.map((flag) => (
                        <VersionFlagBadge key={flag} flag={flag} />
                    ))}
                </span>
            )}
            <Blurb text={blurb} />
        </>
    )
}

// Blurb Component
const Blurb = ({ text }: { text: string | string[] | undefined }) => {
    if (!text) return null;

    if (Array.isArray(text) && text.length > 0) {
        return (
            <ul className="timeline-blurb-list">
                {text.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    }

    return <p className="timeline-description">{text}</p>;
};

// VersionFlagBadge Subcomponent
type VersionFlag = 'BETA' | 'RC' | 'REVISION' | 'LATEST';

const versionFlagStyles: { [key in VersionFlag]: string } = {
    BETA: "badge bg-warning text-dark me-1 ms-2",
    RC: "badge bg-info me-1 ms-2",
    REVISION: "badge bg-secondary me-1 ms-2",
    LATEST: "badge bg-success me-1 ms-2",
};

const versionFlagTexts: { [key in VersionFlag]: string } = {
    BETA: "Beta",
    RC: "Release Candidate",
    REVISION: "Revision",
    LATEST: "Latest",
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

export type { VersionEntryProps, VersionFlag };
export default VersionEntry;