import VersionEntry, { type VersionEntryProps, type VersionFlag } from './version-entry';
import { Timeline, TimelineItem } from '../../shared/timeline';
import { useVersionFilter } from './hooks';

// VersionList Component
export interface VersionListProps {
    versions: VersionEntryProps[];
    accentColor?: string;
    lineColor?: string;
}

const VersionList = ({ versions, accentColor, lineColor }: VersionListProps) => {
    const { filteredVersions, toggleFlagFilter, flagsFilter } = useVersionFilter(versions);

    return (
        <>
            <div className='d-lg-flex gap-4'>
                <FilterCheckbox
                    flag="BETA"
                    label="Show Beta Versions"
                    isHidden={flagsFilter.has('BETA')}
                    onToggle={toggleFlagFilter}
                />
                <FilterCheckbox
                    flag="MILESTONE"
                    label="Show Milestone Versions"
                    isHidden={flagsFilter.has('MILESTONE')}
                    onToggle={toggleFlagFilter}
                />
                <FilterCheckbox
                    flag="RC"
                    label="Show Release Candidates"
                    isHidden={flagsFilter.has('RC')}
                    onToggle={toggleFlagFilter}
                />
                <FilterCheckbox
                    flag="REVISION"
                    label="Show Revision Versions"
                    isHidden={flagsFilter.has('REVISION')}
                    onToggle={toggleFlagFilter}
                />
            </div>

            <Timeline accentColor={accentColor} lineColor={lineColor}>
                {filteredVersions.map((versionInfo) => (
                    <TimelineItem
                        key={versionInfo.version}
                    >
                        <VersionEntry {...versionInfo} />
                    </TimelineItem>
                ))}
            </Timeline>
        </>
    );
};

// FilterCheckbox Subcomponent
interface FilterCheckboxProps {
    flag: VersionFlag;
    label: string;
    isHidden: boolean;
    onToggle: (flag: VersionFlag) => void;
}

const FilterCheckbox = ({ flag, label, isHidden, onToggle }: FilterCheckboxProps) => {
    const id = `${flag.toLowerCase()}-filter`;

    return (
        <div className="form-check mb-3">
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                checked={!isHidden}
                onChange={() => onToggle(flag)}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};


export default VersionList;