window.fullScreen = true;
queue().defer(d3.json, "/api/data").await(tableGraph);
function tableGraph(error, apiData) {
var noofdiv = apiData.length;
var root =  Math.sqrt(noofdiv),
	upperValue = Math.ceil(root),
	lowerValue = Math.floor(root),
	lastremain = noofdiv - (upperValue * (lowerValue-1)),
	loopValue = (upperValue * (lowerValue-1)),
	widthSDiv = 100/upperValue,
	heightSDiv = 100/lowerValue;

var divhtml = '';
var color = '';
for( var i = 0; i < loopValue; i++ ){
      if (apiData[i].morale == 0)
        color = "red"
      if (apiData[i].morale == 1)
        color = "yellow"
      if (apiData[i].morale == 2)
        color = "green"
      divhtml += '<div class="sdiv '+color+'" style="width:'+widthSDiv+'%; height:'+heightSDiv+'%"></div>'
}

for( var i = 0; i<lastremain; i++  ){
divhtml += '<div class="sdiv '+color+'" style="width:'+100/lastremain+'%; height:'+heightSDiv+'%"></div>'
}

document.getElementById("heatMap").innerHTML = divhtml;
 };
/*
function tableGraph(error, apiData) {
  if (apiData != undefined && apiData.length > 0)
  {
    var chart = dc.heatMap("#heatMap");
    var ndx    = crossfilter(apiData),
          runDim = ndx.dimension(function(d) { return [+d.morale]; }),
          runGroup = runDim.group().reduceSum(function(d) { return +d.morale; });
      chart
        .width(45 * 20 + 80)
        .height(45 * 5 + 40)
        .dimension(runDim)
        .group(runGroup)
        .keyAccessor(function(d) { return +d.key[0]; })
        //.valueAccessor(function(d) { return +d.key[1]; })
        //.colorAccessor(function(d) { return +d.value; })
        .colors(["#ff0000","#ffff00","#00ff00"])
        .calculateColorDomain();
      chart.render();
  }
};
*/
