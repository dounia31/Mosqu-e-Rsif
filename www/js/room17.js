room17.prototype = Object.create(THREE.Object3D.prototype);
room17.prototype.constructor = room17;

function room17(scene) {
    THREE.Object3D.call(this);
    var room17 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/17.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom16 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room17.remove();
            // Start a new room
            new room16(scene);
        },
    });

    this.navigationArrowToroom18 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room17.remove();
            // Start a new room
            new room18(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom25 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room17.remove();
            // Start a new room
            new room25(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom16.remove();
        this.navigationArrowToroom18.remove();
        this.navigationArrowToroom25.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}