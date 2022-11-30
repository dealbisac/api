import db from "../models/main.js"

// Show all education details
export const showEducations = (req, res, id) => {
    // prepare the query
    const sql = "SELECT * FROM education";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

// Show individuals education detail
export const showEducation = (req, res) => {
    // get the individual id
    const education_id = req.params.id;

    // prepare the query
    const sql = "SELECT * FROM `education` WHERE id = ?";
    db.query(sql, [education_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

// Insert education details
export const insertEducation = (req, res) => {
    // get the data from the request
    const nameofschool = req.body;
    const degree = req.body;
    const passedyear = req.body;
    const division = req.body;
    const remarks = req.body;

    // prepare the query
    const sql = "INSERT INTO `education`(`nameofschool`, `degree`, `passedyear`, `division`, `remarks`) VALUES (?,?,?,?,?)";
    db.query(sql, [nameofschool, degree, passedyear, division, remarks], (err, result) => {
        if (err) throw err;
        res.send("Data inserted sucessfully");
    });
}

// Update education details
export const updateEducation = (req, res) => {
    // get the data from the request
    const education_id = req.params.id;
    const nameofschool = req.body;
    const degree = req.body;
    const passedyear = req.body;
    const division = req.body;
    const remarks = req.body;

    // prepare the query
    const sql = "UPDATE `education` SET `nameofschool`=?,`degree`=?,`passedyear`=?,`division`=?,`remarks`=? WHERE id = ?";
    db.query(sql, [nameofschool, degree, passedyear, division, remarks, education_id], (err, result) => {
        if (err) throw err;
        res.send("Data updated sucessfully");
    });
}

// Delete education details
export const deleteEducation = (req, res) => {
    // get the data from the request
    const education_id = req.params.id;

    // prepare the query
    const sql = "DELETE FROM `education` WHERE id = ?";
    db.query(sql, [education_id], (err, result) => {
        if (err) throw err;
        res.send("Data deleted sucessfully");
    });
}


