Vue.component('navigation', {

	template:'#navigation-template',

	props:
	[
		'controllers',
		'state'
	],

	filters:
	{
		humanize:Helpers.humanize
	},

	methods:
	{
		getLabel:function(method)
		{
			return Helpers.methodLabel(method);
		},
		
		getLinkHtml:function(route)
		{
			var name 	= '<span class="name">';
			var divider	= '<span class="divider">&#9656;</span> ';
			var close	= '</span> ';

			return name + route
				.replace('/sketchpad/', '')
				.replace(/\/$/, '')
				.split('/')
				.join(close + divider + name) + close;
		},

		isActive:function(route)
		{
			return this.state.route && this.state.route.indexOf(route) == 0;
		}

	}

});