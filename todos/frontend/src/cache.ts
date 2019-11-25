import {defaultDataIdFromObject} from 'apollo-cache-inmemory';

export const dataIdFromObject = (obj: any) => {
    const id = defaultDataIdFromObject(obj);
    if (id === null) {
        return undefined;
    }
    return id;
};
