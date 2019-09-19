jQuery.prototype.text = function(string){
	if(!string){
		return this.textContent;
	}
	this.innerText = string;
	return this;
}