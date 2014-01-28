Package.describe({
  summary: "jQuery-migrate - detect and restore deprecated jQuery APIs"
});

Package.on_use(function (api, where) {
  api.add_files([
    'jquery-migrate-1.2.1.js'
  ], 'client');
});