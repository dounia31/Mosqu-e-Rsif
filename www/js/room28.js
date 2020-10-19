room28.prototype = Object.create(THREE.Object3D.prototype);
room28.prototype.constructor = room28;

function room28(scene) {
    THREE.Object3D.call(this);
    var room28 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/28.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom27 = new NavigationArrow(scene, {
        degree: 360,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room28.remove();
            // Start a new room
            new room27(scene);
            scene.rotation.y -= 300 ;
        },
    });
    
    this.navigationArrowToroom29= new NavigationArrow(scene, {
        degree: 240,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room28.remove();
            // Start a new room
            new room29(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom26= new NavigationArrow(scene, {
        degree: 310,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room28.remove();
            // Start a new room
            new room26(scene);
            scene.rotation.y -= 200 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom27.remove();
        this.navigationArrowToroom29.remove();
        this.navigationArrowToroom26.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}