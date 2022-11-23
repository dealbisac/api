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
    const education_id = req.body.id;

    // prepare the query
        const sql = "SELECT * FROM education WHERE id = `education_id`";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
}


export const updateEducation = (req, res) => {
    res.send("About Page from Main Controller");
    // res.status(200).json("About Page from Main Controller");
}

