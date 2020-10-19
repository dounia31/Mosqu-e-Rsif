room19.prototype = Object.create(THREE.Object3D.prototype);
room19.prototype.constructor = room19;

function room19(scene) {
    THREE.Object3D.call(this);
    var room19 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/19.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom18 = new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room18(scene);
        },
    });

    this.navigationArrowToroom14 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room14(scene);
        },
    });

    this.navigationArrowToroom20 = new NavigationArrow(scene, {
        degree: 90,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room20(scene);
        },
    });

    this.navigationArrowToroom23 = new NavigationArrow(scene, {
        degree: -5,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room23(scene);
        },
    });



    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom18.remove();
        this.navigationArrowToroom14.remove();
        this.navigationArrowToroom20.remove();
        this.navigationArrowToroom23.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}