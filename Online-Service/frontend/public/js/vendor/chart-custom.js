"use strict";
jQuery(document).ready(function(){
	window.addEventListener('load', (event) =>{

		// Bar Graph Chart
		var bar_graph = document.getElementById("barcanvaschart");
		if (bar_graph !== null) {
			  var type = 'linear';
			  var delayed;
			  var config = {
				  type: 'bar',
				  data: {
					  labels: ['01', '02', '03', '04', '05', '06', '07', '08' , '09' , '10' , '11',  '12', '13', '14', '15', '16', '17'],
					  datasets: [{
						hoverBackgroundColor:  window.chartColors.blue,
						barPercentage: 0.3,
						backgroundColor: window.chartColors.blue,
						fill: true,
						data: [2000, 3430, 4230, 2630, 3010,4310, 2550 ,3140, 630, 4430, 530, 3725, 4500, 4135 , 3265, 2745, 3755 ],
					}]
				  },
					options: {
						width:10,
						responsive: true,
						tittle:true,
						position: "nearest",
						padding:10,
						animation: {
							delay:3500,
							onComplete: () => {
							delayed = true;
							},
							delay: (context) => {
							let delay = 0;
							if (context.type === 'data' && context.mode === 'default' && !delayed) {
								delay = context.dataIndex * 50 + context.datasetIndex + 1500;
							}
							return delay;
							},
						},
						plugins: {
							legend: false,
							filler: {
							propagate: true,
							},
							tooltip: {
								displayColors:true,
								padding:{
									x:15,
									top:15,
									bottom:9,
								},
								borderColor:'#eee',
								borderWidth:1,
								titleColor: '#353648',
								bodyColor: '#353648',
								footerColor:'#ff7062',
								footerFont:{weight: 'regular'},
								backgroundColor:'rgba(255, 255, 255)',
								bodySpacing: 6,
								titleMarginBottom: 9,
								callbacks: {
									title: function(context){
										return 'June ' + context[0].label + ' 2020'
									},
									label: function(context){
										return '' + context.dataset.data[context.dataIndex]
									},
								}
							},
						},
						elements: {
							line: {
							tension: 0.000001
							},
						},
						scales: {
							x: {
								ticks: {
									display: true,
								},
								grid:{
									display : false
								},
								display:true
							},
							y: {
								
								ticks: {
									display: true
								},
								grid:{
									display : false
								},
								display:true
								
							}
						}
					}
			  };
			  var ctx2 = document.getElementById('barcanvaschart').getContext('2d');
			  window.myLine = new Chart(ctx2, config);
			
		//    charData.forEach(function(items) {
		// 	  var div = document.createElement('div');
		// 	  div.classList.add('chart-container');
		// 	  var canvas = document.createElement('canvas');
		// 	  div.appendChild(canvas);
		// 	  items.container.appendChild(div);
		// 	  var ctx = canvas.getContext('2d');
		// 	  var config = createChartConfig(items, items.data);
		// 	  new Chart(ctx, config);
		//   });
		  var toggleScale = document.getElementById('toggleScale')
		  if (toggleScale !== null) {
			document.getElementById('toggleScale').addEventListener('click', function() {
			  type = type === 'linear' ? 'linear' : 'linear';
			  window.myLine.options.title.text = 'Chart.js Line Chart - ' + type;
			  window.myLine.options.scales.yAxes[0] = {
				display: true,
				type: type
			  };
			  window.myLine.update();
			});
		  }
		}
	
	
	})
})