room26.prototype = Object.create(THREE.Object3D.prototype);
room26.prototype.constructor = room26;

function room26(scene) {
    THREE.Object3D.call(this);
    var room26 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/26.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom25 = new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room26.remove();
            // Start a new room
            new room25(scene);
        },
    });

    this.navigationArrowToroom27 = new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room26.remove();
            // Start a new room
            new room27(scene);
        },
    });

    this.navigationArrowToroom28= new NavigationArrow(scene, {
        degree: 70,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room26.remove();
            // Start a new room
            new room28(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom25.remove();
        this.navigationArrowToroom27.remove();
        this.navigationArrowToroom28.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}