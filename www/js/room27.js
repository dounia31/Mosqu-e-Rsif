room27.prototype = Object.create(THREE.Object3D.prototype);
room27.prototype.constructor = room27;

function room27(scene) {
    THREE.Object3D.call(this);
    var room27 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/27.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom26 = new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room27.remove();
            // Start a new room
            new room26(scene);
        },
    });

    this.navigationArrowToroom28= new NavigationArrow(scene, {
        degree: 90,//150
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room27.remove();
            // Start a new room
            new room28(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom26.remove();
        this.navigationArrowToroom28.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}