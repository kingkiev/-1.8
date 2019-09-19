jQuery.prototype.html = function(string){
	if(!string){
		return this.innerHTML;
	}
	this.innerHTML = string;
	return this;
}