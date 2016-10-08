define(['GameObject', 'PolygonGraphicsComponent', 'OBBPhysicsComponent',
    'MovementComponent'], function (GameObject, PolygonGraphicsComponent,
    OBBPhysicsComponent, MovementComponent) {
    'use strict';

    function OBBObject(point, vector, width, length, speed, fillStyle) {
        GameObject.call(this);

        this.addGraphicsComponent(new PolygonGraphicsComponent(this,
            fillStyle), 'rendering');
        this.addPhysicsComponent(new OBBPhysicsComponent(this, point, vector,
            width, length), 'data');
        this.addPhysicsComponent(new MovementComponent(this, speed),
            'movement');

        if (fillStyle === null || fillStyle === undefined) {
            fillStyle = '#ECEFF1';
        }
    }

    OBBObject.prototype = Object.create(GameObject.prototype);
    OBBObject.prototype.constructor = OBBObject;

    return OBBObject;
});
