// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSISTENCY
let author = {
    name: ''
};

let course = {
    author: 'id'
};

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course = {
    author: {
        name: 'Mosh'
    }
};

// Hybrid
let author = {
    name: 'Mosh'
    // 50 other properties
};

let course = {
    author: {
        id: 'ref to author document',
        name: 'Mosh'
    }
};