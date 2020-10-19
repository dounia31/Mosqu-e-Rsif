room13.prototype = Object.create(THREE.Object3D.prototype);
room13.prototype.constructor = room13;

function room13(scene) {
    THREE.Object3D.call(this);
    var room13 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/13.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom12 = new NavigationArrow(scene, {
        degree: 90,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room13.remove();
            // Start a new room
            new room12(scene);
        },
    });

    this.navigationArrowToroom14= new NavigationArrow(scene, {
        degree: 290,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room13.remove();
            // Start a new room
            new room14(scene);
            //scene.rotation.y += 500 ;
        },
    });

    this.navigationArrowToroom20= new NavigationArrow(scene, {
        degree: -10,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room13.remove();
            // Start a new room
            new room20(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom12.remove();
        this.navigationArrowToroom14.remove();
        this.navigationArrowToroom20.remove();


        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}