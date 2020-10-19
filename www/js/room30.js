room30.prototype = Object.create(THREE.Object3D.prototype);
room30.prototype.constructor = room30;

function room30(scene) {
    THREE.Object3D.call(this);
    var room30 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/30.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom29 = new NavigationArrow(scene, {
        degree: 80,//50
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room30.remove();
            // Start a new room
            new room29(scene);
        },
    });

    this.navigationArrowToroom23= new NavigationArrow(scene, {
        degree: 0,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room30.remove();
            // Start a new room
            new room23(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom31= new NavigationArrow(scene, {
        degree: 270,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room30.remove();
            // Start a new room
            new room31(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom29.remove();
        this.navigationArrowToroom23.remove();
        this.navigationArrowToroom31.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}