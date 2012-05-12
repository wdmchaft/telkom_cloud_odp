var win = Titanium.UI.currentWindow;
var winx = Titanium.UI.createWindow({

});
var y = Ti.UI.currentTab;
alert(y);
win.backgroundColor = '#f7f7f7';

var data = [];
var labels = ['account', 'cases', 'calls', 'contacts', 'emps', 'leads'];
for(var x = 0; x < 1; x++) {
	for(var c = 0; c < labels.length; c++) {
		var item = Titanium.UI.createDashboardItem({
			image : '../img/dashboard/' + labels[c] + '_on.png',
			selectedImage : '../img/dashboard/' + labels[c] + '_off.png',
			label : labels[c],
			canDelete : false,
		});
		data.push(item);
	}
}

var dashboard = Titanium.UI.createDashboardView({
	data : data,
	editable : false,

});
win.add(dashboard);

dashboard.addEventListener('click', function(e) {
	winx.title = e.item.label;
	winx.barColor = '#32AAE1';
	y.open(winx);
});

