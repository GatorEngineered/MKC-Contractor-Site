export const PERMIT_CONTENT = {
    commercial: {
        'after-the-fact': {
            title: 'After-the-Fact Permits & Code Violation Corrections',
            description: 'Commercial: Help legalize unpermitted work, meet code, and handle violations.'
        },
        'change-of-use': {
            title: 'Change-of-Use Permits',
            description: 'Commercial: Reclassify your space (e.g., office to retail) with full support.'
        },
        // Add more as needed
    },
    residential: {
        'after-the-fact': {
            title: 'After-the-Fact Permits & Code Violation Corrections',
            description: 'Residential: Correct unpermitted work and bring your home up to code.'
        },
        'change-of-use': {
            title: 'Change-of-Use Permits',
            description: 'Residential: Convert areas like garages into living space the right way.'
        },
        // Add more as needed
    }
} as const;

export type CategoryType = keyof typeof PERMIT_CONTENT;
export type PermitKeyType = keyof typeof PERMIT_CONTENT['commercial'];
