// create heatmap instance
var heatmap = h337.create({
	container: document.getElementById('heatmapContainer'),
	// a waterdrop gradient ;-)
	gradient: { .1: 'rgba(255,0,0,0)', 0.25: "rgba(255,0,0, .6)", .6: "red", .9: "red", .95: 'rgba(255,0,0,.4)'},
	maxOpacity: .6,
	radius: 0,
	blur: .90
});

var heatmap1 = h337.create({
	container: document.getElementById('heatmapContainer'),
	// a waterdrop gradient ;-)
	gradient: { .1: 'rgba(255,255,0,0)', 0.25: "rgba(255,255,0, .6)", .6: "yellow", .9: "yellow", .95: 'rgba(255,255,0,.4)'},
	maxOpacity: .6,
	radius: 0,
	blur: .90
});

var heatmap2 = h337.create({
	container: document.getElementById('heatmapContainer'),
	// a waterdrop gradient ;-)
	gradient: { .1: 'rgba(0,128,0,0)', 0.25: "rgba(0,128,0, .6)", .6: "green", .9: "green", .95: 'rgba(0,128,0,.4)'},
	maxOpacity: .6,
	radius: 0,
	blur: .90
});

// boundaries for data generation
var width = (+window.getComputedStyle(document.body).width.replace(/px/,''));
var height = (+window.getComputedStyle(document.body).height.replace(/px/,''));

var genHeatmap = function(error, apiData) {
	for(var i=0; i< apiData.length; i++){
		 generate(apiData[i].morale,(Math.random()* width), (Math.random()* height));
	}
};

var generate = function(morale, xvalue, yvalue) {
	var max = 100;
	var min = 0;
	var t = [];

	var x = xvalue >> 0;
	var y = yvalue >> 0;
	var c = 100;
	var r = (Math.random()* 100) >> 0;
	var radius = 60;

	// add the datapoint to heatmap instance
	if (parseInt(morale) == 0)
	 heatmap.addData({ x: x+r, y:y+r, value: c, radius: radius});
	if (parseInt(morale) == 1)
	 heatmap1.addData({ x: x+r, y:y+r, value: c, radius: radius});
	if (parseInt(morale) == 2)
	 heatmap2.addData({ x: x+r, y:y+r, value: c, radius: radius});
};
/*
// this generates new datapoints in a kind of random timing
setTimeout(function test() {
	var rand = (Math.random() * 500) >> 0;
	generate();
	setTimeout(test, rand);
}, 100);
*/
queue().defer(d3.json, "/api/data").await(genHeatmap);


/*window.fullScreen = true;
queue().defer(d3.json, "/api/data").await(tableGraph);
function tableGraph(error, apiData) {
 for(var i=0; i< apiData.length; i++){
	 	generate(apiData[i]);
 }

}
// create heatmap instance
var heatmap = h337.create({
	container: document.getElementById('heatmapContainer'),
	// a waterdrop gradient ;-)
	gradient: { .1: 'rgba(255,0,0,0)', 0.25: "rgba(255,0,0, .6)", .6: "red", .9: "red", .95: 'rgba(255,0,0,.4)'},
	maxOpacity: .6,
	radius: 0,
	blur: .90
});

var heatmap1 = h337.create({
	container: document.getElementById('heatmapContainer'),
	// a waterdrop gradient ;-)
	gradient: { .1: 'rgba(255,255,0,0)', 0.25: "rgba(255,255,0, .6)", .6: "yellow", .9: "yellow", .95: 'rgba(255,255,0,.4)'},
	maxOpacity: .6,
	radius: 0,
	blur: .90
});

var heatmap2 = h337.create({
	container: document.getElementById('heatmapContainer'),
	// a waterdrop gradient ;-)
	gradient: { .1: 'rgba(0,255,0,0)', 0.25: "rgba(0,255,0, .6)", .6: "green", .9: "green", .95: 'rgba(0,255,0,.4)'},
	maxOpacity: .6,
	radius: 0,
	blur: .90
});

// boundaries for data generation
var width = (+window.getComputedStyle(document.body).width.replace(/px/,''));
var height = (+window.getComputedStyle(document.body).height.replace(/px/,''));

function generate(morale) {
	 var max = 100;
	 var min = 0;
	 var t = [];

	 var x = (Math.random()* width) >> 0;
	 var y = (Math.random()* height) >> 0;
	 var c = 100;
	 var r = (Math.random()* 100) >> 0;

	 // add the datapoint to heatmap instance
	 if (morale == 0)
	 	heatmap.addData({ x: x+50, y:y+50, value: c+r, radius: 50});
	if (morale == 1)
	 	heatmap1.addData({ x: x+100, y:y+100, value: c+r, radius: 50});
	if (morale == 2)
	 	heatmap2.addData({ x: x, y:y, value: c+r, radius: 50});
 };
*/
