export const LABELS={
    TITLE:'IMAGE APPROVAL APPLICATION',
    APPROVED:'APPROVED IMAGES',
    HELPTEXT:(cb: () => JSX.Element) => {
        const comp = cb();
        return ['Click on the',comp,'in order to get image recommendations']
    }
}

export const SCROLL_META = {
    STEP:200,
}

export const URL = 'https://api.unsplash.com/photos/random';