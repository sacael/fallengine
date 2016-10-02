define(['TimeObject','GameEngine','RenderingEngine'], function(TimeObject,
	GameEngine, RenderingEngine) {
	'use strict';

	function CoreEngine(canvas) {
		this.fps = 60;
		this.gameObjects = [];
		this.generateGameObjects();
		this.gameEngine = new GameEngine(this.gameObjects);
		this.renderingEngine = new RenderingEngine(this.gameObjects, canvas);
		this.timeObject = new TimeObject();
		this.running = false;
	}

	CoreEngine.prototype.start = function () {
		this.running = true;
		this.loop();
	}

	CoreEngine.prototype.loop = function () {
		if (this.running) {
			this.timeObject.initialize();
			this.gameEngine.update();
			this.renderingEngine.render();
			var delay = (1000/this.fps) - this.timeObject.getDelta();
			window.setTimeout(this.loop.bind(this), delay);
		}
	}

	CoreEngine.prototype.stop = function () {
		this.running = false;
	}

	CoreEngine.prototype.generateGameObjects = function () {

	}

	return CoreEngine;
});
