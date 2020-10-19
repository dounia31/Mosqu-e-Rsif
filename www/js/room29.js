room29.prototype = Object.create(THREE.Object3D.prototype);
room29.prototype.constructor = room29;

function room29(scene) {
    THREE.Object3D.call(this);
    var room29 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/29.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom28 = new NavigationArrow(scene, {
        degree: 140,//50
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room29.remove();
            // Start a new room
            new room28(scene);
            scene.rotation.y -= 400 ;
        },
    });

    this.navigationArrowToroom24= new NavigationArrow(scene, {
        degree: 10,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room29.remove();
            // Start a new room
            new room24(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom30= new NavigationArrow(scene, {
        degree: 280,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room29.remove();
            // Start a new room
            new room30(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom28.remove();
        this.navigationArrowToroom24.remove();
        this.navigationArrowToroom30.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}