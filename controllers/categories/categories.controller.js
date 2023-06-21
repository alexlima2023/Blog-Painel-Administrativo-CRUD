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

router.get('/admin/categories', (req, res) => {

    Category.findAll().then(categories => {
        res.render('admin/categories/index', {categories: categories});
    });

});

router.post("/categories/delete", (req, res) => {
    let id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            });
        }else{// NÃO FOR UM NÚMERO
            res.redirect("/admin/categories");
        }
    }else{ // NULL
        res.redirect("/admin/categories");
    }
});



export default router;