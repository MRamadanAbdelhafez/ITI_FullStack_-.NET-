function generateCourse (opj) {
    defaultOpj = {
        courseName: "default course name",
        courseDuration: "default course duration",
        courseOwner: "default course owner",
    };
    let course = Object.assign({},defaultOpj, opj);
    return course;
}
opj_1 = {
    courseName: "JavaScript",
    // courseDuration: "4 months",
    courseOwner: "Ng_Sara",
};
console.log(generateCourse(opj_1));