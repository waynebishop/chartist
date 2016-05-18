var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 3, 2, null, 3, 10]
  ]
};

// To fill in missing data holes

var options = {
	lineSmooth: Chartist.Interpolation.cardinal({
    	fillHoles: true,
  	}),
	showArea: true
}


// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data, options);