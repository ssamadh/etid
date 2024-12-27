const HEADER_TITLE_PROPERTIES_MAP = {
    title: 'Sample Title',
    subtitle: 'Sample Subtitle',
    date: '2024-06-22'
};

function keys(obj) {
    return Object.keys(obj);
}

const HEADER_TITLE_PROPERTIES = keys(HEADER_TITLE_PROPERTIES_MAP);
console.log(HEADER_TITLE_PROPERTIES); // Output: ['title', 'subtitle', 'date']
