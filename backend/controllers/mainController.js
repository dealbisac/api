// you can import the model here.

export const home = (req, res) => {
    res.send("Hello World from the backend");
    // res.status(200).json("Home Page from Main Controller");
}

export const about = (req, res) => {
    res.send("About Page from Main Controller");
    // res.status(200).json("About Page from Main Controller");
}

export const blog = (req, res) => {
    res.send("Blog Page from Main Controller");
    // res.status(200).json("Blog Page from Main Controller");
}
