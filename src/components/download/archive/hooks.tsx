import { useState } from 'react';
import type { VersionEntryProps, VersionFlag } from './version-entry';

export function useVersionFilter(
    versions: VersionEntryProps[],
) {
    // flagsFilter contains flags to HIDE (not show)
    const [flagsFilter, setFlagsFilter] = useState<Set<VersionFlag>>(new Set(['BETA', "MILESTONE", "RC"]));

    const toggleFlagFilter = (flag: VersionFlag) => {
        console.log('Toggling flag filter for:', flag);
        setFlagsFilter((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(flag)) {
                newSet.delete(flag);
            } else {
                newSet.add(flag);
            }
            return newSet;
        });
    };

    const filteredVersions = versions.filter((version) => {
        if (flagsFilter.size === 0) {
            return true;
        }
        if (!version.flags || version.flags.length === 0) {
            return true;
        }
        return !version.flags.some((flag) => flagsFilter.has(flag));
    });

    return {
        flagsFilter,
        toggleFlagFilter,
        filteredVersions,
    };
}