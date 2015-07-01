// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
    //swipePanel: 'left'
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

/*myApp.onPageReinit('*', function (page) {
	UpdateAllButtonStates();
});*/

myApp.onPageAfterAnimation('*', function (page) {
	UpdateAllButtonStates();
});

myApp.onPageAfterAnimation('charts', function (page) {
	CreateCharts();
});

// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
		UpdateAllButtonStates();
        myApp.pullToRefreshDone();
    }, 2000);
});