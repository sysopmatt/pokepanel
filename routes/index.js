exports.index = function(req, res){
  res.render('index', { Page: 'Home', title: 'Pokemon Namer' });
};

exports.admin = function(req, res){
  res.render('admin', { Page: 'Admin', title: 'Admin' });
};