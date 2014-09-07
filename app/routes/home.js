'use strict';


exports.index = (req, res)=>{
  res.render('home/index');
};

exports.contact = (req, res)=>{
  res.render('home/contact');
};

exports.about = (req, res)=>{
  res.render('home/about');
};

exports.showProject = (req, res)=>{
  res.render(`projects/${req.params.projectName}`);
};
