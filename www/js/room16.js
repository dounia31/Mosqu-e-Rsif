room16.prototype = Object.create(THREE.Object3D.prototype);
room16.prototype.constructor = room16;

function room16(scene) {
    THREE.Object3D.call(this);
    var room16 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/16.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom15 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room16.remove();
            // Start a new room
            new room15(scene);
            //scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom17 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room16.remove();
            // Start a new room
            new room17(scene);
            //scene.rotation.y += 600 ;
        },
    });

    /*this.navigationArrowToroom17= new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room16.remove();
            // Start a new room
            new room17(scene);
        },
    });

    this.navigationArrowToroom25= new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room16.remove();
            // Start a new room
            new room25(scene);
        },
    });*/

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom15.remove();
        this.navigationArrowToroom17.remove();
        //this.navigationArrowToroom17.remove();
        //this.navigationArrowToroom25.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}