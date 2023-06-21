import express from "express";
const router =  express.Router();
import Category from "../../models/Category.js";
import slugify from "slugify";

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
});

router.post('/categories/save', (req, res) => {
    let title = req.body.title;
    if(title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title) 
        }).then(() => {
            res.redirect('/');
        });
    }else {
        res.redirect('/admin/categories/new');
    }
});

export default router;