Package.describe({
  summary: "jQuery-migrate - detect and restore deprecated jQuery APIs"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files('client/jquery-migrate-1.2.1.js', 'client');
});