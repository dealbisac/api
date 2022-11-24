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

// Show individuals education details
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

export const updateEducation = (req, res) => {
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

