export const getLimitOffset = (season) => {
    switch (season) {
        case 1: return { limit: 151, offset: 0 };
        case 2: return { limit: 100, offset: 151 };
        case 3: return { limit: 135, offset: 251 };
        case 4: return { limit: 107, offset: 386 };
        case 5: return { limit: 156, offset: 493 };
        case 6: return { limit: 72, offset: 649 };
        case 7: return { limit: 88, offset: 721 };
        case 8: return { limit: 96, offset: 809 };
        case 9: return { limit: 120, offset: 905 };
        default: return { limit: 151, offset: 0 };
    }
};