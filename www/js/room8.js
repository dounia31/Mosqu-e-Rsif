room8.prototype = Object.create(THREE.Object3D.prototype);
room8.prototype.constructor = room8;

function room8(scene) {
    THREE.Object3D.call(this);
    var room8 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/8.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom7 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room8.remove();
            // Start a new room
            new room7(scene);
        },
    });

    this.navigationArrowToroom9 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room8.remove();
            // Start a new room
            new room9(scene);
        },
    });
   
    this.navigationArrowToroom32 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room8.remove();
            // Start a new room
            new room32(scene);
        },
    });

    

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom7.remove();
        this.navigationArrowToroom9.remove();
        this.navigationArrowToroom32.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}