var VISEM = VISEM || {} ;

VISEM.Plant = function (name, type, width, height, children) {
	this.path = new Path();
	this.name = name;
	this.type = type;
	this.width = width;
	this.height = height;
	this.rooms = new Array();
	this.ratio;
	this.largerSide;
	this.diagonal;
    this.clearance  = 5;
    this.children = children;
};

VISEM.Plant.prototype.init = function(canvasWrapper) {

    var canvasWidth = wrapper.clientWidth;
    this.largerSide = this.diagonal(this.width, this.height);
    this.ratio = this.getRatio(canvasWidth, this.largerSide);

    for (var i = 0; i < this.children.length; i++) {
       var room = new VISEM.Room(
            this.children[i].name,
            this.children[i].type,
            this.children[i].totalWidth,
            this.children[i].totalHeight,
            this.children[i].children,
            this.ratio
        );

       this.addRoom(room);
    };
};

VISEM.Plant.prototype.draw = function() {
    for (var i = 0; i < this.rooms.length; i++) {
        this.rooms[i].draw();
    };
};

VISEM.Plant.prototype.getRatio = function(canvasWidth, largerSide) {
    return canvasWidth / largerSide;
};

VISEM.Plant.prototype.diagonal = function (width, height){
    return Math.sqrt(Math.pow(width,2) + Math.pow(height,2));
};

VISEM.Plant.prototype.addRoom = function(room) {
	this.rooms.push(room);
};