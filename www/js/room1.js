room1.prototype = Object.create(THREE.Object3D.prototype);
room1.prototype.constructor = room1;

function room1(scene) {
    THREE.Object3D.call(this);
    var room1 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/1.jpg'); 

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom2 = new NavigationArrow(scene, {
        degree: 170,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room1.remove();
            // Start a new room
            new room2(scene);
            scene.rotation.y += 50 ;
        },
    });

    /*this.navigationArrowToroom28 = new NavigationArrow(scene, {
        degree: 250,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room1.remove();
            // Start a new room
            new room28(scene);
        },
    });*/

    this.remove = function () {
        this.photoSphere.remove();

       
        this.navigationArrowToroom2.remove();
        //this.navigationArrowToroom28.remove();
     

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}