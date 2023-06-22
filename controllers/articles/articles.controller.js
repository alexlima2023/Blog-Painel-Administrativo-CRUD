import express from "express";
const router =  express.Router();
import Category from "../../models/Category.js";

router.get('/articles', (req, res) => {
    res.send("Rota de artigos"); 
});

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories})
    })
});

export default router;