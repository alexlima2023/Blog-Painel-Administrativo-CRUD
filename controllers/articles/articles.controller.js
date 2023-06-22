import express from "express";
const router =  express.Router();

router.get('/articles', (req, res) => {
    res.send("Rota de artigos"); 
});

router.get('/admin/articles/new', (req, res) => {
    res.render('admin/articles/new');
});

export default router;