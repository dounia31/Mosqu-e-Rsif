room15.prototype = Object.create(THREE.Object3D.prototype);
room15.prototype.constructor = room15;

function room15(scene) {
    THREE.Object3D.call(this);
    var room15 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/15.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom14 = new NavigationArrow(scene, {
        degree: 90,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room15.remove();
            // Start a new room
            new room14(scene);
            //scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom16 = new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room15.remove();
            // Start a new room
            new room16(scene);
            //scene.rotation.y -= 300 ;
        },
    });

    this.navigationArrowToroom18= new NavigationArrow(scene, {
        degree: 20,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room15.remove();
            // Start a new room
            new room18(scene);
            //scene.rotation.y -= 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom14.remove();
        this.navigationArrowToroom16.remove();
        this.navigationArrowToroom18.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}