Titanium.UI.setBackgroundColor('#000');
var tabGroup = Titanium.UI.createTabGroup();
var tabGroup2 = Titanium.UI.createTabGroup();
var win = Titanium.UI.createWindow({
	backgroundImage : 'img/Default.png',
	title : 'Tab 1',
	backgroundColor : '#fff',
	navBarHidden : false,
	barColor : '#32AAE1',
	tabBarHidden : true,
});
var win_sme = Titanium.UI.createWindow({
	title : 'Tab 1',
	backgroundColor : '#fff',
	tabBarHidden : true,
	navBarHidden : false,
	barColor : '#32AAE1',
	title : 'SME',
	url : 'SME/index.js',
});
var win_sme_close = Ti.UI.createButton({
	title : 'Close'
});
win_sme.leftNavButton = win_sme_close;
var win_lme = Titanium.UI.createWindow({
	backgroundImage : 'img/Default.png',
	title : 'Tab 1',
	backgroundColor : '#fff',
	tabBarHidden : true,
});
var button_sme = Ti.UI.createButton({
	width : 280,
	left : 20,
	top : 260,
	title : 'SME',
	zIndex : 2

})
var button_lme = Ti.UI.createButton({
	width : 280,
	right : 20,
	top : 310,

	title : 'Large Enterprise',
	zIndex : 2

})
win.add(button_sme);
win.add(button_lme);
var tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Tab 1',
	window : win
});
button_sme.addEventListener('click', function(e) {
	tab1.open(win_sme);
	win_sme_close.addEventListener('click', function(e) {
		win_sme.close();
	})
})
tabGroup.addTab(tab1);

// open tab group
tabGroup.open();
