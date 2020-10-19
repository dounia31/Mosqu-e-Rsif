room3.prototype = Object.create(THREE.Object3D.prototype);
room3.prototype.constructor = room3;

function room3(scene) {
    THREE.Object3D.call(this);
    var room3 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/3.jpg');

    this.textLights = new TextLights(scene, {});


    this.navigationArrowToroom2 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room3.remove();
            // Start a new room
            new room2(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom4 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room3.remove();
            // Start a new room
            new room4(scene);
            //scene.rotation.y -= 100 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom2.remove();
        this.navigationArrowToroom4.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}