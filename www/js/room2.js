room2.prototype = Object.create(THREE.Object3D.prototype);
room2.prototype.constructor = room2;

function room2(scene) {
    THREE.Object3D.call(this);
    var room2 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/2.jpg');

    this.textLights = new TextLights(scene, {});


    this.navigationArrowToroom1 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room2.remove();
            // Start a new room
            new room1(scene);
        },
    });
    
    this.navigationArrowToroom3 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room2.remove();
            // Start a new room
            new room3(scene);
            //scene.rotation.y += 500 ;
        },
    });


    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom1.remove();
        this.navigationArrowToroom3.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}