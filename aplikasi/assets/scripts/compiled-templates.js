define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["strut.etch_extension/align"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" \n	class=\"btn btn-small etch-"
    + alias4(((helper = (helper = helpers.button || (depth0 != null ? depth0.button : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"><i class=\"icon-align-"
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i></a>";
},"useData":true});

this["JST"]["strut.etch_extension/colorChooser"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input class=\"color-chooser colorpicker etch-"
    + container.escapeExpression(((helper = (helper = helpers.button || (depth0 != null ? depth0.button : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"button","hash":{},"data":data}) : helper)))
    + "\" />";
},"useData":true});

this["JST"]["strut.etch_extension/defaultButton"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" \n	class=\"btn btn-small etch-"
    + alias4(((helper = (helper = helpers.button || (depth0 != null ? depth0.button : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.display || (depth0 != null ? depth0.display : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"display","hash":{},"data":data}) : helper)))
    + "</span></a>";
},"useData":true});

this["JST"]["strut.etch_extension/fontFamilySelection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn-group\">\n	<button class=\"btn btn-inverse dropdown-toggle btn-small fontFamilyBtn\" data-toggle=\"dropdown\" title=\"Choose the font family\"><span class=\"text\">Lato</span><span class=\"caret\"></span></button>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontFamily\">\n		<li>\n                  <a class=\"lato\" href=\"#\" data-value=\"'Lato', sans-serif\">Lato</a>\n                  <a class=\"leaguegothic\" href=\"#\" data-value=\"'League Gothic', sans-serif\">League Gothic</a>\n                  <a class=\"droidsansmono\" href=\"#\" data-value=\"'Droid Sans Mono', monospace\">Droid Sans Mono</a>\n                  <a class=\"ubuntu\" href=\"#\" data-value=\"'Ubuntu', sans-serif\">Ubuntu</a>\n                  <a class=\"abril\" href=\"#\" data-value=\"'Abril Fatface', cursive\">Abril</a>\n                  <a class=\"hammersmith\" href=\"#\" data-value=\"'Hammersmith One', sans-serif\">Hammersmith One</a>\n                  <a class=\"fredoka\" href=\"#\" data-value=\"'Fredoka One', cursive\">Fredoka One</a>\n                  <a class=\"gorditas\" href=\"#\" data-value=\"'Gorditas', cursive\">Gorditas</a>\n                  <a class=\"pressstart\" href=\"#\" data-value=\"'PressStart2P', cursive\">Press Start 2P</a>\n		</li>\n	</ul>\n</div>";
},"useData":true});

this["JST"]["strut.etch_extension/fontSizeSelection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn-group\">\n	<a class=\"btn btn-small btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" title=\"Choose the font size\"><span class=\"text fontSizeReadout\">72</span>\n		<span class=\"caret\"></span></a>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontSize\">\n		<li>\n                  <a href=\"#\" data-value=\"144\">144</a>\n                  <a href=\"#\" data-value=\"96\">96</a>\n                  <a href=\"#\" data-value=\"72\">72</a>\n			<a href=\"#\" data-value=\"64\">64</a>\n                  <a href=\"#\" data-value=\"48\">48</a>\n                  <a href=\"#\" data-value=\"36\">36</a>\n                  <a href=\"#\" data-value=\"24\">24</a>\n                  <a href=\"#\" data-value=\"16\">16</a>\n                  <a href=\"#\" data-value=\"12\">12</a>\n                  <a href=\"#\" data-value=\"8\">8</a>\n		</li>\n     	</ul>\n</div>";
},"useData":true});

this["JST"]["strut.header/Header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"navbar navbar-inverse span12\">\n	<div class=\"navbar-inner\">\n		<ul class=\"nav\">\n			<li class=\"logo-holder\">\n			</li>\n			<li class=\"divider-vertical\">\n			</li>\n		</ul>\n		<ul class=\"nav\">\n			<li class=\"create-comp-buttons\">\n				<div class=\"btn-group iconBtns\">\n				</div>\n			</li>\n		</ul>\n		<ul class=\"nav theme-buttons\">\n		</ul>\n		<ul class=\"nav pull-right\">\n			<li class=\"divider-vertical\">\n			</li>\n			<li class=\"mode-buttons\">\n			</li>\n		</ul>\n	</div>\n</div>";
},"useData":true});

this["JST"]["strut.logo_button/Logo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"btn logo btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<span class=\"logo-bg\"></span>\n    <span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu\">\n</ul>";
},"useData":true});

this["JST"]["strut.presentation_generator.bespoke/BespokeTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.lambda, alias5=helpers.blockHelperMissing;

  return "	<style>\n	"
    + ((stack1 = ((helper = (helper = helpers.customStylesheet || (depth0 != null ? depth0.customStylesheet : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customStylesheet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</style>\n	<style>\n"
    + ((stack1 = alias5.call(depth0,alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.customBackgrounds : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.bgs : stack1), depth0),{"name":"customBackgrounds.attributes.bgs","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</style>\n"
    + ((stack1 = container.invokePartial(partials.PerSlideSurfaceStylesheet,depth0,{"name":"PerSlideSurfaceStylesheet","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	<div id=\"main\" class=\""
    + ((stack1 = (helpers.isBGClass || (depth0 && depth0.isBGClass) || alias2).call(alias1,(depth0 != null ? depth0.surface : depth0),{"name":"isBGClass","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "strut-surface "
    + container.escapeExpression(((helper = (helper = helpers.cannedTransition || (depth0 != null ? depth0.cannedTransition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cannedTransition","hash":{},"data":data}) : helper)))
    + "\">\n		<article class=\"innerBg\">\n"
    + ((stack1 = alias5.call(depth0,alias4(((stack1 = (depth0 != null ? depth0.slides : depth0)) != null ? stack1.models : stack1), depth0),{"name":"slides.models","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</article>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.CustomBgStylesheet,depth0,{"name":"CustomBgStylesheet","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.surface || (depth0 != null ? depth0.surface : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"surface","hash":{},"data":data}) : helper)))
    + " ";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "					<section class=\""
    + ((stack1 = (helpers.determineBG || (depth0 && depth0.determineBG) || alias2).call(alias1,depths[1],depths[3],{"name":"determineBG","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " slideContainer strut-slide-"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" style=\"width: 1024px; height: 768px;\" data-bespoke-state=\"strut-slide-"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.determineSurface || (depth0 && depth0.determineSurface) || alias2).call(alias1,depths[1],depths[3],{"name":"determineSurface","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n						<div class=\"themedArea\">\n              			"
    + ((stack1 = (helpers.marked || (depth0 && depth0.marked) || alias2).call(alias1,(depth0 != null ? depth0.markdown : depth0),{"name":"marked","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              			</div>\n";
  stack1 = ((helper = (helper = helpers.components || (depth0 != null ? depth0.components : depth0)) != null ? helper : alias2),(options={"name":"components","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.components) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					</section>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							"
    + ((stack1 = (helpers.renderComponent || (depth0 && depth0.renderComponent) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"renderComponent","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["strut.presentation_generator.handouts/HandoutsTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<style type=\"text/css\">\n"
    + ((stack1 = ((helper = (helper = helpers.customStylesheet || (depth0 != null ? depth0.customStylesheet : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"customStylesheet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</style>\n\n<div class=\"notes-handout\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(((stack1 = (depth0 != null ? depth0.slides : depth0)) != null ? stack1.models : stack1), depth0),{"name":"slides.models","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n<div class=\"notes\">\n	Notes:\n</div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, buffer = 
  "<div class=\"slide-and-notes\">\n<div class=\"slide "
    + ((stack1 = (helpers.determineBG || (depth0 && depth0.determineBG) || alias2).call(alias1,depths[1],depths[3],{"name":"determineBG","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " slideContainer\" style=\""
    + ((stack1 = (helpers.slideBGImg || (depth0 && depth0.slideBGImg) || alias2).call(alias1,depths[1],{"name":"slideBGImg","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n<div class=\"reveal themedArea\">\n"
    + ((stack1 = (helpers.marked || (depth0 && depth0.marked) || alias2).call(alias1,(depth0 != null ? depth0.markdown : depth0),{"name":"marked","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
  stack1 = ((helper = (helper = helpers.components || (depth0 != null ? depth0.components : depth0)) != null ? helper : alias2),(options={"name":"components","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.components) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(container,depth0,helpers,partials,data) {
    return "";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.renderComponent || (depth0 && depth0.renderComponent) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"renderComponent","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true,"useDepths":true});

this["JST"]["strut.presentation_generator.impress/ComponentContainer"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "rotate("
    + container.escapeExpression(((helper = (helper = helpers.rotate || (depth0 != null ? depth0.rotate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"rotate","hash":{},"data":data}) : helper)))
    + "rad)";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "skewX("
    + container.escapeExpression(((helper = (helper = helpers.skewX || (depth0 != null ? depth0.skewX : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"skewX","hash":{},"data":data}) : helper)))
    + "rad)";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "skewY("
    + container.escapeExpression(((helper = (helper = helpers.skewY || (depth0 != null ? depth0.skewY : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"skewY","hash":{},"data":data}) : helper)))
    + "rad)";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.round || (depth0 && depth0.round) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.width : stack1),{"name":"round","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "px";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.round || (depth0 && depth0.round) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.height : stack1),{"name":"round","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "px";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<div class=\"componentContainer "
    + container.escapeExpression(((helper = (helper = helpers.customClasses || (depth0 != null ? depth0.customClasses : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"customClasses","hash":{},"data":data}) : helper)))
    + "\" style=\"top: "
    + ((stack1 = (helpers.round || (depth0 && depth0.round) || alias2).call(alias1,(depth0 != null ? depth0.y : depth0),{"name":"round","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "px; left: "
    + ((stack1 = (helpers.round || (depth0 && depth0.round) || alias2).call(alias1,(depth0 != null ? depth0.x : depth0),{"name":"round","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "px; -webkit-transform: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rotate : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.skewX : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.skewY : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "; -moz-transform: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rotate : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.skewX : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.skewY : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "; transform: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rotate : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.skewX : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.skewY : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "; width: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scale : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "; height: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scale : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ";\">\n"
    + ((stack1 = container.invokePartial(partials.TransformContainer,depth0,{"name":"TransformContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/Image"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = container.invokePartial(partials.ComponentContainer,depth0,{"name":"ComponentContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data}) : helper)))
    + "\"></img>\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/ImpressTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda, alias4=helpers.blockHelperMissing;

  return "<style type=\"text/css\">\n"
    + ((stack1 = ((helper = (helper = helpers.customStylesheet || (depth0 != null ? depth0.customStylesheet : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"customStylesheet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</style>\n<style>\n"
    + ((stack1 = alias4.call(depth0,alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.customBackgrounds : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.bgs : stack1), depth0),{"name":"customBackgrounds.attributes.bgs","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</style>\n"
    + ((stack1 = container.invokePartial(partials.PerSlideSurfaceStylesheet,depth0,{"name":"PerSlideSurfaceStylesheet","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<!-- This is a work around / hack to get the user's browser to download the fonts \n if they decide to save the presentation. -->\n<div style=\"visibility: hidden; width: 0px; height: 0px\">\n<img src=\"css/Lato-Bold.woff\" />\n<img src=\"css/HammersmithOne.woff\" />\n<img src=\"css/Droid-Sans-Mono.woff\" />\n<img src=\"css/Gorditas-Regular.woff\" />\n<img src=\"css/FredokaOne-Regular.woff\" />\n<img src=\"css/Ubuntu.woff\" />\n<img src=\"css/Ubuntu-Bold.woff\" />\n<img src=\"css/PressStart2P-Regular.woff\" />\n<img src=\"css/Lato-BoldItalic.woff\" />\n<img src=\"css/AbrilFatface-Regular.woff\" />\n<img src=\"css/Lato-Regular.woff\" />\n</div>\n\n<div class=\"fallback-message\">\n    <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>\n    <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>\n</div>\n\n<div class=\"bg "
    + ((stack1 = (helpers.isBGClass || (depth0 && depth0.isBGClass) || alias2).call(alias1,(depth0 != null ? depth0.surface : depth0),{"name":"isBGClass","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "strut-surface\">\n<div class=\"bg innerBg\">\n<div id=\"impress\">\n"
    + ((stack1 = alias4.call(depth0,alias3(((stack1 = (depth0 != null ? depth0.slides : depth0)) != null ? stack1.models : stack1), depth0),{"name":"slides.models","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div id=\"overview\" class=\"step\" data-state=\"strut-slide-overview\" data-x=\""
    + ((stack1 = (helpers.scaleX || (depth0 && depth0.scaleX) || alias2).call(alias1,(depth0 != null ? depth0.overviewX : depth0),{"name":"scaleX","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-y=\""
    + ((stack1 = (helpers.scaleY || (depth0 && depth0.scaleY) || alias2).call(alias1,(depth0 != null ? depth0.overviewY : depth0),{"name":"scaleY","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-scale=\"9\"></div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.CustomBgStylesheet,depth0,{"name":"CustomBgStylesheet","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.surface || (depth0 != null ? depth0.surface : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"surface","hash":{},"data":data}) : helper)))
    + " ";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "			<div class=\"step\" data-state=\"strut-slide-"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.determineSurface || (depth0 && depth0.determineSurface) || alias2).call(alias1,depths[1],depths[3],{"name":"determineSurface","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-x=\""
    + ((stack1 = (helpers.scaleX || (depth0 && depth0.scaleX) || alias2).call(alias1,(depth0 != null ? depth0.x : depth0),{"name":"scaleX","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-y=\""
    + ((stack1 = (helpers.scaleY || (depth0 && depth0.scaleY) || alias2).call(alias1,(depth0 != null ? depth0.y : depth0),{"name":"scaleY","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rotateX : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rotateY : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rotateZ : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.z : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.impScale : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			<div class=\""
    + ((stack1 = (helpers.determineBG || (depth0 && depth0.determineBG) || alias2).call(alias1,depths[1],depths[3],{"name":"determineBG","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " slideContainer strut-slide-"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" style=\"width: 1024px; height: 768px;\">\n			<div class=\"themedArea\">\n			"
    + ((stack1 = (helpers.marked || (depth0 && depth0.marked) || alias2).call(alias1,(depth0 != null ? depth0.markdown : depth0),{"name":"marked","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n";
  stack1 = ((helper = (helper = helpers.components || (depth0 != null ? depth0.components : depth0)) != null ? helper : alias2),(options={"name":"components","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.components) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "data-rotate-x=\""
    + ((stack1 = (helpers.toDeg || (depth0 && depth0.toDeg) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.rotateX : depth0),{"name":"toDeg","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "data-rotate-y=\""
    + ((stack1 = (helpers.toDeg || (depth0 && depth0.toDeg) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.rotateY : depth0),{"name":"toDeg","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "data-rotate-z=\""
    + ((stack1 = (helpers.toDeg || (depth0 && depth0.toDeg) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.rotateZ : depth0),{"name":"toDeg","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-z=\""
    + container.escapeExpression(((helper = (helper = helpers.z || (depth0 != null ? depth0.z : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"z","hash":{},"data":data}) : helper)))
    + "\"";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-scale=\""
    + container.escapeExpression(((helper = (helper = helpers.impScale || (depth0 != null ? depth0.impScale : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"impScale","hash":{},"data":data}) : helper)))
    + "\"";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			"
    + ((stack1 = (helpers.renderComponent || (depth0 && depth0.renderComponent) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"renderComponent","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n<div class=\"hint\">\n    <p>Use a spacebar or arrow keys to navigate</p>\n</div>\n</div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["strut.presentation_generator.impress/Shape"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  ((stack1 = container.invokePartial(partials.ComponentContainer,depth0,{"name":"ComponentContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.shapeSvg || (depth0 != null ? depth0.shapeSvg : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"shapeSvg","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.shapeSvg) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/SVGContainer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"componentContainer\" style=\"top: "
    + alias4(((helper = (helper = helpers.y || (depth0 != null ? depth0.y : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y","hash":{},"data":data}) : helper)))
    + "px; left: "
    + alias4(((helper = (helper = helpers.x || (depth0 != null ? depth0.x : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"x","hash":{},"data":data}) : helper)))
    + "px; width: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.width : stack1), depth0))
    + "px; height: "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.height : stack1), depth0))
    + "px;\">\n"
    + ((stack1 = container.invokePartial(partials.TransformContainer,depth0,{"name":"TransformContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/SVGImage"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = container.invokePartial(partials.SVGContainer,depth0,{"name":"SVGContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data}) : helper)))
    + "\" style=\"width: 100%; height: 100%\"></img>\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/TextBox"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.ComponentContainer,depth0,{"name":"ComponentContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div style=\"font-size: "
    + alias4(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data}) : helper)))
    + "px;\" class=\"antialias\">\n"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\n</div>\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/TransformContainer"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "scale("
    + ((stack1 = (helpers.round || (depth0 && depth0.round) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.x : stack1),{"name":"round","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ", "
    + ((stack1 = (helpers.round || (depth0 && depth0.round) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.y : stack1),{"name":"round","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ")";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"transformContainer\" style=\"-webkit-transform: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scale : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ";\n-moz-transform: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scale : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ";\ntransform: "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scale : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">";
},"useData":true});

this["JST"]["strut.presentation_generator.impress/Video"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.ComponentContainer,depth0,{"name":"ComponentContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<video controls>\n	<source src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = helpers.srcType || (depth0 != null ? depth0.srcType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"srcType","hash":{},"data":data}) : helper)))
    + "\" preload=\"metadata\"></source>\n</video>\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/WebFrame"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = container.invokePartial(partials.ComponentContainer,depth0,{"name":"ComponentContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<iframe width=\"960\" height=\"768\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data}) : helper)))
    + "\"></iframe>\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/Youtube"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return ((stack1 = container.invokePartial(partials.SVGContainer,depth0,{"name":"SVGContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<object width=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.width : stack1), depth0))
    + "\" height=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.height : stack1), depth0))
    + "\"><param name=\"movie\" value=\"http://www.youtube.com/v/"
    + alias2(((helper = (helper = helpers.shortSrc || (depth0 != null ? depth0.shortSrc : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"shortSrc","hash":{},"data":data}) : helper)))
    + "&hl=en&fs=1\"><param name=\"allowFullScreen\" value=\"true\"><embed src=\"http://www.youtube.com/v/"
    + alias2(((helper = (helper = helpers.shortSrc || (depth0 != null ? depth0.shortSrc : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"shortSrc","hash":{},"data":data}) : helper)))
    + "&hl=en&fs=1\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" width=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.width : stack1), depth0))
    + "\" height=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.scale : depth0)) != null ? stack1.height : stack1), depth0))
    + "\"></object>\n</div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.impress/YoutubeContainer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"componentContainer\" style=\"top: "
    + alias4(((helper = (helper = helpers.y || (depth0 != null ? depth0.y : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y","hash":{},"data":data}) : helper)))
    + "px; left: "
    + alias4(((helper = (helper = helpers.x || (depth0 != null ? depth0.x : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"x","hash":{},"data":data}) : helper)))
    + "px;\">\n"
    + ((stack1 = container.invokePartial(partials.TransformContainer,depth0,{"name":"TransformContainer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["strut.presentation_generator.reveal/RevealTemplate"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "  <style type=\"text/css\">\n    "
    + ((stack1 = ((helper = (helper = helpers.customStylesheet || (depth0 != null ? depth0.customStylesheet : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"customStylesheet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </style>\n"
    + ((stack1 = container.invokePartial(partials.PerSlideSurfaceStylesheet,depth0,{"name":"PerSlideSurfaceStylesheet","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  \n    <div class=\""
    + ((stack1 = (helpers.isBGClass || (depth0 && depth0.isBGClass) || alias2).call(alias1,(depth0 != null ? depth0.surface : depth0),{"name":"isBGClass","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "reveal strut-surface\">\n      <div class=\"bg innerBg\">\n      <div class=\"slides\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(((stack1 = (depth0 != null ? depth0.slides : depth0)) != null ? stack1.models : stack1), depth0),{"name":"slides.models","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n      </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.surface || (depth0 != null ? depth0.surface : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"surface","hash":{},"data":data}) : helper)))
    + " ";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "          <section class=\""
    + ((stack1 = (helpers.determineBG || (depth0 && depth0.determineBG) || alias2).call(alias1,depths[1],depths[3],{"name":"determineBG","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " slideContainer strut-slide-"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" style=\"width: 1024px; height: 768px;\" data-state=\"strut-slide-"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.determineSurface || (depth0 && depth0.determineSurface) || alias2).call(alias1,depths[1],depths[3],{"name":"determineSurface","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            <div class=\"themedArea\">\n            "
    + ((stack1 = (helpers.marked || (depth0 && depth0.marked) || alias2).call(alias1,(depth0 != null ? depth0.markdown : depth0),{"name":"marked","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n";
  stack1 = ((helper = (helper = helpers.components || (depth0 != null ? depth0.components : depth0)) != null ? helper : alias2),(options={"name":"components","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.components) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </section>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              "
    + ((stack1 = (helpers.renderComponent || (depth0 && depth0.renderComponent) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"renderComponent","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["strut.presentation_generator/Button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li data-option=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><a>\n    		<span class=\"check\" style=\"visibility: hidden;\">&#10003;</span>\n    		"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "\n    </a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<button class=\"btn btn-success act\"><i class=\"icon-play icon-white\"/><span class=\"chosen\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.chosen : depth0)) != null ? stack1.displayName : stack1), depth0))
    + "</span></button>\n<button class=\"btn dropdown-toggle btn-success iconBtnsSplit\" data-toggle=\"dropdown\">\n  <span class=\"caret whiteCaret\"></span>\n</button>\n<ul class=\"dropdown-menu\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.generators : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["strut.presentation_generator/CustomBgStylesheet"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	."
    + alias4(((helper = (helper = helpers.klass || (depth0 != null ? depth0.klass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"klass","hash":{},"data":data}) : helper)))
    + " {\n		background: "
    + alias4(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"style","hash":{},"data":data}) : helper)))
    + ";\n	}\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":".","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["strut.presentation_generator/PerSlideSurfaceStylesheet"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	.strut-surface {\n		"
    + ((stack1 = (helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.surface : depth0),{"name":"getBGImgStyle","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	}\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	.slideContainer {\n		"
    + ((stack1 = (helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.background : depth0),{"name":"getBGImgStyle","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	}\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"attributes","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.attributes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.isBGImg || (depth0 && depth0.isBGImg) || alias2).call(alias1,(depth0 != null ? depth0.surface : depth0),{"name":"isBGImg","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isBGImg || (depth0 && depth0.isBGImg) || alias2).call(alias1,(depth0 != null ? depth0.background : depth0),{"name":"isBGImg","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "		.strut-surface > .strut-slide-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " {\n			/*this only works for bg images or custom bgs*/\n			/*for bg classes we'll have to introduce a data api*/\n			"
    + ((stack1 = (helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle) || alias2).call(alias1,(depth0 != null ? depth0.surface : depth0),{"name":"getBGImgStyle","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		}\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "		.slideContainer.strut-slide-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + " {\n			"
    + ((stack1 = (helpers.getBGImgStyle || (depth0 && depth0.getBGImgStyle) || alias2).call(alias1,(depth0 != null ? depth0.background : depth0),{"name":"getBGImgStyle","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		}\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<style>\n"
    + ((stack1 = (helpers.isBGImg || (depth0 && depth0.isBGImg) || alias2).call(alias1,(depth0 != null ? depth0.surface : depth0),{"name":"isBGImg","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.isBGImg || (depth0 && depth0.isBGImg) || alias2).call(alias1,(depth0 != null ? depth0.background : depth0),{"name":"isBGImg","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(((stack1 = (depth0 != null ? depth0.slides : depth0)) != null ? stack1.models : stack1), depth0),{"name":"slides.models","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</style>";
},"useData":true});

this["JST"]["strut.slide_components/Component"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"content-scale\">\n<div class=\"content\"></div>\n</div>\n<span class=\"topLabel label\"> \n	<span class=\"skewx\" data-delta=\"skewX\">↔</span>\n	<span class=\"align\" data-option=\"x\">↹</span>\n</span>\n<span class=\"leftLabel label\"> \n	<span class=\"align\" data-option=\"y\">↹</span>\n	<span class=\"skewy\" data-delta=\"skewY\">↔</span>\n</span>\n<span class=\"rightLabel label rotate\" data-delta=\"rotate\">↻</span>\n<span class=\"scale label\" data-delta=\"scale\">↔</span>\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\n<div class=\"positioningCtrls form-inline\">\n	<span class=\"label leftposition\">→</span>\n	<input class=\"position\" type=\"text\" data-option=\"x\" value=\""
    + alias4(((helper = (helper = helpers.x || (depth0 != null ? depth0.x : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"x","hash":{},"data":data}) : helper)))
    + "\"/>\n	<span class=\"label bottomposition\">↑</span>\n	<input class=\"position\" type=\"text\" data-option=\"y\" value=\""
    + alias4(((helper = (helper = helpers.y || (depth0 != null ? depth0.y : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y","hash":{},"data":data}) : helper)))
    + "\"/>\n</div>\n";
},"useData":true});

this["JST"]["strut.slide_components/ShapesDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a class=\"shape\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" width=\"100%\" height=\"100%\"></img></a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, buffer = 
  "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-star icon-white\"></i>\n	"
    + ((stack1 = (helpers.lang || (depth0 && depth0.lang) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"lang","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\n<ul class=\"dropdown-menu horizontalDropdown\" role=\"menu\" style=\"min-width: 127px; width: 127px\">\n";
  stack1 = ((helper = (helper = helpers.shapes || (depth0 != null ? depth0.shapes : depth0)) != null ? helper : alias2),(options={"name":"shapes","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.shapes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n";
},"useData":true});

this["JST"]["strut.slide_editor/Button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"btn-group iconBtns\">\n	<a class=\"btn btn-plast\">\n		<i class=\"icon-th-list icon-white\"></i>\n		"
    + ((stack1 = (helpers.lang || (depth0 && depth0.lang) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"slides",{"name":"lang","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</a>\n</div>";
},"useData":true});

this["JST"]["strut.slide_editor/Tablets"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tablets-content\">\n</div>\n<div class=\"tablets-toggle btn btn-plast\">\n	<span class=\"caret whiteCaret\"></span>\n</div>";
},"useData":true});

this["JST"]["strut.slide_snapshot/SlideDrawer"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.renderComponent || (depth0 && depth0.renderComponent) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,"Video WebFrame",{"name":"renderComponent","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, buffer = 
  "<div class=\"themedArea\">\n"
    + ((stack1 = (helpers.marked || (depth0 && depth0.marked) || alias2).call(alias1,(depth0 != null ? depth0.markdown : depth0),{"name":"marked","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
  stack1 = ((helper = (helper = helpers.components || (depth0 != null ? depth0.components : depth0)) != null ? helper : alias2),(options={"name":"components","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.components) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["JST"]["strut.slide_snapshot/SlideSnapshot"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"overlay\"></div>\n<div class=\"slideDrawer slideContainer\"></div>\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\n<span class=\"badge badge-inverse\"> </span>";
},"useData":true});

this["JST"]["strut.slide_snapshot/TransitionSlideSnapshot"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"content-container\">\n	<div class=\"content\">\n		<div class=\"slideDrawer slideContainer\"></div>\n		<div class=\"back\"></div>\n		<div class=\"top\"></div><div class=\"bottom\"></div><div class=\"left\"></div><div class=\"right\"></div>\n	</div>\n</div>\n\n<div class=\"topLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateY\">↻Y</span>\n	<input type=\"text\" data-option=\"rotateY\" value=\""
    + alias4(((helper = (helper = helpers.rotateY || (depth0 != null ? depth0.rotateY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rotateY","hash":{},"data":data}) : helper)))
    + "\"></input>\n</div>\n<div class=\"leftLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateX\">↻X</span>\n	<input type=\"text\" data-option=\"rotateX\" value=\""
    + alias4(((helper = (helper = helpers.rotateX || (depth0 != null ? depth0.rotateX : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rotateX","hash":{},"data":data}) : helper)))
    + "\"></input>\n</div>\n<div class=\"rightLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateZ\">↻Z</span>\n	<input type=\"text\" data-option=\"rotateZ\" value=\""
    + alias4(((helper = (helper = helpers.rotateZ || (depth0 != null ? depth0.rotateZ : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rotateZ","hash":{},"data":data}) : helper)))
    + "\"></input>\n</div>\n<div class=\"positioningCtrls form-inline\">\n	<span class=\"label layer\">z</span>\n	<input class=\"position\" type=\"text\" data-option=\"z\" value=\""
    + alias4(((helper = (helper = helpers.z || (depth0 != null ? depth0.z : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"z","hash":{},"data":data}) : helper)))
    + "\"/>\n	<span class=\"label scales\">↔</span>\n	<input class=\"position\" type=\"text\" data-option=\"scale\" value=\""
    + alias4(((helper = (helper = helpers.impScale || (depth0 != null ? depth0.impScale : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"impScale","hash":{},"data":data}) : helper)))
    + "\"/>\n</div>\n<span class=\"badge badge-inverse\"> </span>\n";
},"useData":true});

this["JST"]["strut.splash/Splash"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div></div>";
},"useData":true});

this["JST"]["strut.storage/ProviderTab"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div></div>";
},"useData":true});

this["JST"]["strut.storage/StorageModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\"providerTab\"><a data-provider=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<ul class=\"nav nav-tabs\">\n";
  stack1 = ((helper = (helper = helpers.tabs || (depth0 != null ? depth0.tabs : depth0)) != null ? helper : alias2),(options={"name":"tabs","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.tabs) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</ul>\n	<div class=\"tabContent\">\n	</div>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
},"useData":true});

this["JST"]["strut.themes/BackgroundChooserDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li><a class=\""
    + alias4(((helper = (helper = helpers.klass || (depth0 != null ? depth0.klass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"klass","hash":{},"data":data}) : helper)))
    + " thumbnail\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\" data-class=\""
    + alias4(((helper = (helper = helpers.klass || (depth0 != null ? depth0.klass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"klass","hash":{},"data":data}) : helper)))
    + "\"></a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-tint icon-white\"></i>\n	"
    + ((stack1 = (helpers.lang || (depth0 && depth0.lang) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"lang","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\n<ul class=\"dropdown-menu\" role=\"menu\">\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\n";
  stack1 = ((helper = (helper = helpers.backgrounds || (depth0 != null ? depth0.backgrounds : depth0)) != null ? helper : alias2),(options={"name":"backgrounds","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.backgrounds) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\n";
  stack1 = ((helper = (helper = helpers.backgrounds || (depth0 != null ? depth0.backgrounds : depth0)) != null ? helper : alias2),(options={"name":"backgrounds","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.backgrounds) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n</ul>\n";
},"useData":true});

this["JST"]["strut.themes/ColorChooserModal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">Custom Color</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<input type='text' class=\"color-chooser pull-right\" />\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
},"useData":true});

this["JST"]["strut.themes/SurfaceChooserDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li><a class=\""
    + alias4(((helper = (helper = helpers.klass || (depth0 != null ? depth0.klass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"klass","hash":{},"data":data}) : helper)))
    + " thumbnail\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\" data-class=\""
    + alias4(((helper = (helper = helpers.klass || (depth0 != null ? depth0.klass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"klass","hash":{},"data":data}) : helper)))
    + "\"></a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-tint icon-white\"></i>\n	"
    + ((stack1 = (helpers.lang || (depth0 && depth0.lang) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"lang","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>\n<ul class=\"dropdown-menu\" role=\"menu\">\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\n";
  stack1 = ((helper = (helper = helpers.backgrounds || (depth0 != null ? depth0.backgrounds : depth0)) != null ? helper : alias2),(options={"name":"backgrounds","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.backgrounds) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\n";
  stack1 = ((helper = (helper = helpers.backgrounds || (depth0 != null ? depth0.backgrounds : depth0)) != null ? helper : alias2),(options={"name":"backgrounds","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.backgrounds) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n</ul>\n";
},"useData":true});

this["JST"]["strut.transition_editor/Button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"btn-group iconBtns\">\n	<a class=\"btn btn-plast\">\n		<i class=\"icon-th-large icon-white\"></i>\n		"
    + ((stack1 = (helpers.lang || (depth0 && depth0.lang) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"overview",{"name":"lang","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</a>\n</div>";
},"useData":true});

this["JST"]["strut.transition_editor/CannedTransitions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class=\"span4\">\n		<a href=\"#\" data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"thumbnail"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" style=\""
    + alias4(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"style","hash":{},"data":data}) : helper)))
    + "\"></img>\n		</a>\n	</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"thumbnails\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":".","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<span class=\"bespoke-link\">\n	<a href=\"https://github.com/markdalgleish/bespoke.js\" target=\"_blank\">Bespoke.js</a>\n</span>";
},"useData":true});

this["JST"]["tantaman.web.widgets/CodeEditor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<textarea class=\"codeInput\">"
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "</textarea>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Save</a>\n	<a href=\"#\" class=\"btn btn-danger cancel\">Cancel</a>\n</div>";
},"useData":true});

this["JST"]["tantaman.web.widgets/FileBrowser"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "	<li data-fileName=\""
    + alias2(alias1(depth0, depth0))
    + "\"><a>"
    + alias2(alias1(depth0, depth0))
    + " <button class=\"close pull-right\">×</button></a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<input type=\"text\" class=\"fileName\"></input>\n<ul class=\"nav nav-pills nav-stacked\">\n";
  stack1 = ((helper = (helper = helpers.files || (depth0 != null ? depth0.files : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"files","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.files) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});

this["JST"]["tantaman.web.widgets/ItemImportModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div data-option=\"browse\" class=\"btn\">Browse</div>\n	<p><em>*Local images are currently uploaded to imgur.<br/>We're working on changing this.</em></p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<div class=\"alert alert-error dispNone\">\n  		<button class=\"close\" data-dismiss=\"alert\">×</button>\n  		The image URL you entered appears to be incorrect\n	</div>\n	<h4>URL:</h4><div class=\"form-inline\"><input type=\"text\" name=\"itemUrl\"></input>&nbsp;";
  stack1 = ((helper = (helper = helpers.browsable || (depth0 != null ? depth0.browsable : depth0)) != null ? helper : alias2),(options={"name":"browsable","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.browsable) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n	<input type=\"file\" style=\"display:none\"></input>\n	<h4>Preview:</h4>\n	<ul class=\"thumbnails\">\n		<li class=\"span4\">\n			<div class=\"thumbnail\">\n				<"
    + alias4(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data}) : helper)))
    + " class=\"preview\" width=\"360\" height\"268\"></"
    + alias4(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data}) : helper)))
    + ">\n			</div>\n			<div class=\"progress active progress-striped dispNone\">\n  				<div class=\"bar\"></div>\n			</div>\n		</li>\n	</ul>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n</div>";
},"useData":true});

this["JST"]["tantaman.web.widgets/PopoverTextbox"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + " <input type=\"textbox\" placeholder=\"custom1 custom2\"></input>\n<div>\n<a class=\"btn btn-plast ok\">Ok</a>\n<a class=\"btn btn-danger cancel\">Cancel</a>\n</div>";
},"useData":true});

this["JST"]["tantaman.web.widgets/TabbedModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\"providerTab\" data-provider=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><a>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<ul class=\"nav nav-tabs\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":".","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n	<div class=\"tabContent\">\n	</div>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
},"useData":true});

return this["JST"];

});