/**
 * Created by matthewmckay on 4/15/15.
 */
Router.route('/', function() {
    this.layout('LoginLayout');
    this.render('app-header', {to: 'header'});
    this.render('register', {to: 'rg'});
    this.render('login');
});

Router.route('/myrooms', function() {
    this.layout('MyRoomsLayout');
    this.render('app-header', {to: 'header'});
    this.render('roomform', {to: 'form'});
    this.render('roomcontent');
    this.render('ftr', {to: 'footer'});
});

Router.route('/maps', function() {
    this.layout('mapPage');
    this.render('lockMap')
});

Router.route('/admin', function() {
    this.layout('ADMIN');
    this.render('addcollections');
});