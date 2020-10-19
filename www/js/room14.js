room14.prototype = Object.create(THREE.Object3D.prototype);
room14.prototype.constructor = room14;

function room14(scene) {
    THREE.Object3D.call(this);
    var room14 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/14.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom13 = new NavigationArrow(scene, {
        degree: 110,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room14.remove();
            // Start a new room
            new room13(scene);
        },
    });

    this.navigationArrowToroom15 = new NavigationArrow(scene, {
        degree: 260,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room14.remove();
            // Start a new room
            new room15(scene);
            //scene.rotation.y += 500 ;
        },
    });

    this.navigationArrowToroom19= new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room14.remove();
            // Start a new room
            new room19(scene);
            //scene.rotation.y -= 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom13.remove();
        this.navigationArrowToroom15.remove();
        this.navigationArrowToroom19.remove();


        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}