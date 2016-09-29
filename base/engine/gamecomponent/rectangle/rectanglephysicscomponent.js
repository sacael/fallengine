define(['jQuery', 'observer', 'PhysicsComponent'], function ($, observer,
    PhysicsComponent) {
    'use strict';

    function RectanglePhysicsComponent(gameObject, x, y, width, height, angle) {
        PhysicsComponent.call(this, gameObject);

        this.x = x;
        this.y = y;
        this.width = width;
        this.angle = angle;

        if (height !== null || height !== undefined) {
            this.height = height;
        } else {
            this.height = this.width;
        }
    }

    RectanglePhysicsComponent.prototype =
        Object.create(PhysicsComponent.prototype);
    RectanglePhysicsComponent.prototype.constructor = RectanglePhysicsComponent;

    RectanglePhysicsComponent.prototype.update = function (context) {

    };

    return RectanglePhysicsComponent;
});
