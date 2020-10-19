room18.prototype = Object.create(THREE.Object3D.prototype);
room18.prototype.constructor = room18;

function room18(scene) {
    THREE.Object3D.call(this);
    var room18 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/18.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom17 = new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room18.remove();
            // Start a new room
            new room17(scene);
        },
    });

    this.navigationArrowToroom15 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room18.remove();
            // Start a new room
            new room15(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom19= new NavigationArrow(scene, {
        degree: 90,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room18.remove();
            // Start a new room
            new room19(scene);
        },
    });

    this.navigationArrowToroom24= new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room18.remove();
            // Start a new room
            new room24(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom17.remove();
        this.navigationArrowToroom15.remove();
        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom24.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}