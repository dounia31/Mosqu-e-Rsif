room22.prototype = Object.create(THREE.Object3D.prototype);
room22.prototype.constructor = room22;

function room22(scene) {
    THREE.Object3D.call(this);
    var room22 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/22.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom21 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room22.remove();
            // Start a new room
            new room21(scene);
        },
    });

    this.navigationArrowToroom19 = new NavigationArrow(scene, {
        degree: 240,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room22.remove();
            // Start a new room
            new room19(scene);
        },
    });

    this.navigationArrowToroom23 = new NavigationArrow(scene, {
        degree: 300,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room22.remove();
            // Start a new room
            new room23(scene);
        },
    });

    this.navigationArrowToroom31 = new NavigationArrow(scene, {
        degree: 370,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room22.remove();
            // Start a new room
            new room31(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom21.remove();
        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom23.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}