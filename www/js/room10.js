room10.prototype = Object.create(THREE.Object3D.prototype);
room10.prototype.constructor = room10;

function room10(scene) {
    THREE.Object3D.call(this);
    var room10 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/10.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom9 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room10.remove();
            // Start a new room
            new room9(scene);
            scene.rotation.y -= 300 ;
        },
    });
   
    this.navigationArrowToroom11 = new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room10.remove();
            // Start a new room
            new room11(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom21 = new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room10.remove();
            // Start a new room
            new room21(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom9.remove();
        this.navigationArrowToroom11.remove();
        this.navigationArrowToroom21.remove();


        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}