var fileref = document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", "https://maps.googleapis.com/maps/api/js?libraries=visualization,places");
fileref.async = false;
document.getElementsByTagName("head")[0].appendChild(fileref);
window.google = {
	maps:{}
};