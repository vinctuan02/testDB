import db from "../models"

let getHomePage = async (req, res) => {
    try {
        // let data = await db.rider.findAll();
        let data = await db.Test.findAll()
        console.log("hello world")
        console.log("data from getHomepage: ", data)
        return res.render('homepage.ejs', {
            // data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getHomePage: getHomePage,
    // getCRUD: getCRUD,
    // postCRUD: postCRUD,
    // displayGetCRUD: displayGetCRUD,
    // getEditCRUD: getEditCRUD,
    // putCRUD: putCRUD,
    // deleteCRUD: deleteCRUD
}
