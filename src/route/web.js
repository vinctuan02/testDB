import express from "express"
// import userController from "../controllers/userController"
import homeController from "../controller/homeController"

let router = express.Router()

let initWebRouter = (app) => {
    router.get('/', homeController.getHomePage)
    // router.get('/crud', homeController.getCRUD) //CREATE

    // router.post('/post-crud', homeController.postCRUD)
    // router.get('/get-crud', homeController.displayGetCRUD) // READ
    // router.get('/edit-crud', homeController.getEditCRUD) // EDIT

    // router.post('/put-crud', homeController.putCRUD)
    // router.get('/delete-crud', homeController.deleteCRUD) //DELETE


    return app.use('/', router)
}

module.exports = initWebRouter