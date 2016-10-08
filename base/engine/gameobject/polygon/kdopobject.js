define(['GameObject', 'PolygonGraphicsComponent', 'KDopPhysicsComponent',
    'MovementComponent'], function (GameObject, PolygonGraphicsComponent,
    KDopPhysicsComponent, MovementComponent) {
    'use strict';

    function KDopObject(polygon, axis, speed, fillStyle, min, max) {
        GameObject.call(this);

        this.addGraphicsComponent(new PolygonGraphicsComponent(this,
            fillStyle), 'rendering');
        this.addPhysicsComponent(new KDopPhysicsComponent(this, polygon, axis,
            min, max), 'data');
        this.addPhysicsComponent(new MovementComponent(this, speed),
            'movement');

        if (fillStyle === null || fillStyle === undefined) {
            fillStyle = '#ECEFF1';
        }
    }

    KDopObject.prototype = Object.create(GameObject.prototype);
    KDopObject.prototype.constructor = KDopObject;

    return KDopObject;
});
